import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = (props) => {

    const { name, space,price, time } = props.booking
    const { date , setBookingSuccess} = props;
    const [openBooking, setBooking] = React.useState(false);
    const handleBookingOpen = () => setBooking(true);
    const handleBookingClose = () => setBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main', fontWeight: 600 }}>
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div" >
                        {time}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div" >
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div" >
                        Price: ${price} 
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained" >Book Appointment</Button>
                </Paper>

            </Grid>
            <BookingModal
                setBookingSuccess={setBookingSuccess}
                date={date}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
                booking={props.booking}
                handleBookingOpen={handleBookingOpen}

            ></BookingModal>
        </>
    );
};

export default Booking;