import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import child from '../../../src/images/treatment.png'

const DentalCare = () => {
    return (
        <div>
            <Container>
                <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                    <Grid xs={12} md={6} >
                        <img src={child} style={{ width: '70%', height: 'auto' }} alt="" />
                    </Grid>
                    <Grid xs={12} md={6} style={{ lineHeight: '30px', wordSpacing: '4px' }}>
                        <h1>Exceptional Dental Care,</h1>
                        <h1>on Your Terms
                        </h1>
                        <p style={{color: 'gray'}}>It is a long established fact that a reader will be distracted by the readable content of a page is a long established fact that a reader will be distracted by the readable content of a page is a long established fact that a reader will be distracted by the readable content of a page is a long established fact that a reader will be distracted by the readable content of a page is a long established fact that a reader will be distracted by the readable content of a page It is a long established fact that a reader will be distracted by the readable content of a page is a long established fact that a reader will be distracted by the readable content of a page is a long  distracted by the readable content of a page</p>
                        <Button variant="contained" sx={{ backgroundColor: '#56D3CE', opacity: .7 }}>Get Appointment</Button>

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default DentalCare;