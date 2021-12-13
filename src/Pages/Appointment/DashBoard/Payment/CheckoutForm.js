import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const CheckoutForm = ({ appointment }) => {
    const [error, setError] = useState()
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [success, setSuccess] = useState('')
    const { price, displayName, _id } = appointment;
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()

    useEffect(() => {
        fetch('https://obscure-bayou-38255.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price: price })

        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {

            setError(error)
            setSuccess('')
        } else {
            setError('')
            console.log(paymentMethod);
        }
        // Payment intent

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: displayName,
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        } else {
            setSuccess('Your Payment Proceed Successfully!')
            setError('')
            console.log('Payment intent: ', paymentIntent);
            setProcessing(false)
            // save to database 
            const payment = {
                amount: paymentIntent.amount,
                transaction: paymentIntent.client_secret.slice('pi_')[1],
                last4: paymentIntent.last4,
                created: paymentIntent.created,

            }
            fetch(`https://obscure-bayou-38255.herokuapp.com/appointments/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ? <CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe || success}>
                    Pay ${price}
                </button>}
            </form>
            {
                error && <p style={{ color: 'red' }}>{error.message}</p>
            }
            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }
        </div>
    );
};

export default CheckoutForm;