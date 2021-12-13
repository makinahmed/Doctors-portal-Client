import { Container, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import React from 'react';

const HelpLine = () => {
    return (
        <Container sx={{marginTop:'-5px'}}>
            <Grid container >
                <Grid xs={12} md={4} sx={{ backgroundColor: '#61dafb', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div>
                        <LocationOnIcon sx={{ fontSize: '100px' }}></LocationOnIcon>
                    </div>
                    <div>
                       <h4>Visit Our Location</h4>
                       <p>Brooklyn,Ny 10036, United States</p>
                    </div>
                </Grid>
                <Grid xs={12} md={4} sx={{ backgroundColor: '#063970', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div>
                        <AccessTimeIcon sx={{ fontSize: '100px' }}></AccessTimeIcon>
                    </div>
                    <div>
                    <h4>Opening Hours</h4>
                        <p>Everyday: 9am to 5 pm</p>
                    </div>
                </Grid>
                <Grid xs={12} md={4} sx={{ backgroundColor: '#61dafb', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div>
                        <WifiCalling3Icon sx={{ fontSize: '100px' }}></WifiCalling3Icon>
                    </div>
                    <div>
                        <h4>Contact Us Now</h4>
                        <p>+000123456789</p>
                    </div>
                </Grid>
            </Grid>

        </Container>
    );
};

export default HelpLine;