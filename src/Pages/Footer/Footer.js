import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { fontSize } from '@mui/system';

const Footer = () => {
    return (
        <Container>
            <Grid container>
                <Grid xm={12} md={3} sx={{textAlign: 'center'}}>
                    <h3 style={{color:'#56D3CE'}}>Others</h3>
                    <p>Emergency Dental Care</p>
                    <p>Check Up</p>
                    <p>Treatment of Personal Diseases</p>
                    <p>Tooth Extraction</p>
                    <p>Check Up</p>
                </Grid>
                <Grid xm={12} md={3} sx={{textAlign: 'center'}}>
                <h3 style={{color:'#56D3CE'}}>Service</h3>
                    <p>Emergency Dental Care</p>
                    <p>Check Up</p>
                    <p>Treatment of Personal Diseases</p>
                    <p>Tooth Extraction</p>
                    <p>Check Up</p>
                </Grid>
                <Grid xm={12} md={3} sx={{textAlign: 'center'}}>
                <h3 style={{color:'#56D3CE'}}>Oral Health</h3>
                    <p>Emergency Dental Care</p>
                    <p>Check Up</p>
                    <p>Treatment of Personal Diseases</p>
                    <p>Treatment of Personal Diseases</p>
                    <p>Treatment of Personal Diseases</p>
                    <p>Tooth Extraction</p>
                    <p>Check Up</p>
                    <p>Check Up</p>
                </Grid>
                <Grid xm={12} md={3} sx={{textAlign: 'center'}}>
                  <h3>Our Address</h3>
                    <p>New York - 101010 Hudson Yards</p>
                    <FacebookIcon sx={{fontSize: 55,color:'#56D3CE'}}></FacebookIcon>
                    <TwitterIcon sx={{fontSize: 55,color:'#56D3CE'}}></TwitterIcon>

                    <p style={{color:'gray'}}>Call Now</p>
                    <Button variant="contained"  sx={{backgroundColor:'#56D3CE'}}>+202555502615</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;