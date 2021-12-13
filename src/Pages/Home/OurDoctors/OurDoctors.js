import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from './../../../images/doctor-small.png';

const OurDoctors = () => {
    return (
        <Container >
            <Typography sx={{ my: 5, fontWeight: 600 }} variant="h5" color='success.main'>
                Our Doctors
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} >
                    <img style={{ width: '100%' }} src={doctor} alt="" />
                    <Typography sx={{ my: 5, fontWeight: 600 }} variant="h6">
                        Doctor Rafiq
                    </Typography>
                    <Typography sx={{mt: -3}}>
                        +61452200126
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} >
                    <img style={{ width: '100%' }} src={doctor} alt="" />
                    <Typography sx={{ my: 5, fontWeight: 600 }} variant="h6" >
                        Doctor Rafiq
                    </Typography>
                    <Typography sx={{mt: -3}}>
                        +61452200126
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} >
                    <img style={{ width: '100%' }} src={doctor} alt="" />
                    <Typography sx={{ my: 5, fontWeight: 600 }} variant="h6" >
                        Doctor Rafiq
                    </Typography>
                    <Typography sx={{mt: -3}}>
                        +61452200126
                    </Typography>
                </Grid>

            </Grid>
        </Container>
    );
};

export default OurDoctors;