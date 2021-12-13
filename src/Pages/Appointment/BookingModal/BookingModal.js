import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BookingModal = ({ handleBookingClose, booking, openBooking, date ,setBookingSuccess}) => {
    const { user } = useAuth()

    const initialBookingInfo = { displayName: user.displayName, email: user.email, phone: '' }

    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo)
    const handleBookSubmit = e => {
        const appointment = {
            ...bookingInfo,
            service: booking.name,
            price: booking.price,
            bookingTime: date.toLocaleDateString(),
            appointMentTime: booking.time
        }

        //collected data and send to the server
        fetch('https://obscure-bayou-38255.herokuapp.com/appoinments', {
            method: "POST",
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(appointment)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleBookingClose()
                }
            })
        e.preventDefault()
    }

    const bookingAppoinment = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newBookingInfo = { ...bookingInfo }
        newBookingInfo[field] = value;
        setBookingInfo(newBookingInfo)
        // console.log(newBookingInfo);
    }
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBooking}>
                    <Box sx={style}>
                        <Typography id="transition-modal-description" variant="h5" sx={{ mt: 2 }}>
                            {booking.name}
                        </Typography>
                        <Typography id="transition-modal-description" variant="p" sx={{ mt: 2 }}>

                        </Typography>
                        <form onSubmit={handleBookSubmit}>
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                disabled
                                placeholder="time"
                                id="outlined-size-small"
                                defaultValue={booking.time}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={`${user.displayName}`}
                                placeholder="name"
                                size="small"
                                name="displayName"
                                onBlur={bookingAppoinment}
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                placeholder="Phone Number"
                                size="small"
                                name="phone"
                                onBlur={bookingAppoinment}
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={`${user.email}`}
                                placeholder="email"
                                size="small"
                                name="email"
                                onBlur={bookingAppoinment}
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                placeholder="mm/dd/yy"
                                size="small"
                                disabled
                                defaultValue={date.toDateString()}
                            />
                            <Button sx={{ margin: 'auto' }} type="submit" variant="contained">Submit</Button>
                        </form>
                    </Box>
                </Fade>

            </Modal>
        </ >
    );
};

export default BookingModal;