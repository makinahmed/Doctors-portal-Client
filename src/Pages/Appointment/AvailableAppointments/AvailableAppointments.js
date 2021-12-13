import { Alert, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 5,
        price: 20
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
        price: 30
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 12.00 AM',
        space: 9,
        price: 35
    },

    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
        price: 25
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
        price: 40
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
        price: 33
    }
]



const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 2, color: 'info.main' }}>Available Appointsments on : {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">You Have Booked Successfully !</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking booking={booking}
                        setBookingSuccess={setBookingSuccess}
                        date={date}
                        key={booking.id}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;