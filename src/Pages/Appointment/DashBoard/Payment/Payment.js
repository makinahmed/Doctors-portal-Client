import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51Jx93qITo9B4lI4wU92IHKWu7DnoT8IVfUHJng8n1f8daPgJZo6vngs0KeRBxvJJvazO8brv51WRsfCK5TUzTnzt00yIG6PXE0')

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        fetch(`https://obscure-bayou-38255.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [])

    return (
        <div>
            <h3>Please Pay: ${appointment.price}</h3>
            <h2>Patient Name : {appointment.displayName} </h2>
            <h2>Service Name : {appointment.service} </h2>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}

        </div>
    );
};

export default Payment;