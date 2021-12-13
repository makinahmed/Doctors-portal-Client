import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import bg from './../../images/appointment-bg.png'

const ContactUs = () => {
    const style = {
        padding: '20px',
        background: `url(${bg})`,
        backgroundColor: "rgba(47,52,82,0.8)",
        backgroundBlendMode: 'darken, luminosity'
    }
    return (
        <Container style={style} sx={{ my: 5 }}>
            <Typography variant="h5" sx={{ my: 3 }} color="info.main">
                CONTACT US
            </Typography>
            <Typography variant="h3" color="white" >
                Always Connect with us
            </Typography>
            <Grid container spacing={2} sx={{ my: 15 }}>
                <Grid item xs={12} md={12}>
                    <TextField style={{ backgroundColor: 'white', borderRadius: '5px' }} label="Email Address" sx={{ width: "60%" }} variant="outlined" />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField style={{ backgroundColor: 'white', borderRadius: '5px' }} id="outlined-basic" label="Subject" sx={{ width: "60%" }} variant="outlined" />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField style={{ backgroundColor: 'white', borderRadius: '5px' }} id="outlined-basic" label="Your Message" sx={{ width: "60%" }} variant="outlined" multiline
                        rows={4} />
                </Grid>
                <Button sx={{margin: '30px auto'}} variant="contained">Submit</Button>
            </Grid>

        </Container>
    );
};

export default ContactUs;