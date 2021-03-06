import { Container, Grid } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';
import chair from './../../../images/chair.png'

const AppointmentHeader = ({date,setDate}) => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid xs={12} item md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid xs={12} item md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;