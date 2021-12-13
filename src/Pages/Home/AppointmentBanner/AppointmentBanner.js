import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import doctor from '../../../images/doctor.png'
import doctorBackground from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';


const appointmentBanner = {
    marginTop: 175,
    background: `url(${doctorBackground})`,
    backgroundColor: "rgba(47,52,82,0.8)",
    backgroundBlendMode: 'darken, luminosity',
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ width: '100%' }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-105px' }}
                        src={doctor}
                        alt="" />
                </Grid>
                <Grid item xs={12} md={6}  sx={{display: 'flex',textAlign: 'left',alignItems:'center'}}>
                    <Box>
                        <Typography variant="h6" sx={{ mb:5,color: '#56D3CE' }} >
                            Appointment
                        </Typography>
                        <Typography variant="h4"   >
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5,color: 'white', fontSize: '14', fontWeight: 300 }}>
                            It is a long established fact that a reader will be distracted by the readble content of a page when looking at.
                        </Typography>
                        <Button variant="contained" sx={{backgroundColor: '#56D3CE',opacity:.7}}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;