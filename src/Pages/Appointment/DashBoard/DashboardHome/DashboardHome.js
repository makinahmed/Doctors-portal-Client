import { Container } from '@mui/material';
import React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../../Shared/Calender/Calender';
import Appoinments from '../Appoinments/Appoinments';
import { useState } from 'react';

const DashboardHome = () => {
    const [date, setDate] = useState(new Date())

    return (
        <Container>
            <Grid container >
                <Grid item xs={12} md={4}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Appoinments date={date}></Appoinments>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DashboardHome;