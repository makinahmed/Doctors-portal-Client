import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people1 from '../../../src/images/people-1.png'
import people2 from '../../../src/images/people-2.png'
import people3 from '../../../src/images/people-3.png'

const PatientSays = () => {
    return (
        <Container sx={{my:15}}>
            <Box sx={{textAlign: 'left'}}>
                <h3 style={{color: '#56D3CE'}}>TESTIMONIAL</h3>
                <h1>What's Our Patients </h1>
                <h1>Says</h1>
            </Box>
            <Grid container style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid xm={12} md={3}  >
                    <Box sx={{ p: 5, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
                        <Typography sx={{ textAlign: 'justify' }}>
                            It is a long established fact that by the readable content of a lot layout . The point of using lorem a more-or-less normal disturb to using content here,content..
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ marginRight: '20px' }}>
                                <img style={{ width: '70%' }} src={people1} alt="" />
                            </Box>
                            <Box >
                                <h4 style={{ color: "#56D3CE" }}>Winson Herry</h4>
                                <span style={{ color: 'gray' }}>California</span>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid xm={12} md={3} >
                    <Box sx={{ p: 5, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
                        <Typography sx={{ textAlign: 'justify' }}>
                            It is a long established fact that by the readable content of a lot layout . The point of using lorem a more-or-less normal disturb to using content here,content..
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ marginRight: '20px' }}>
                                <img style={{ width: '70%' }} src={people2} alt="" />
                            </Box>
                            <Box >
                                <h4 style={{ color: "#56D3CE" }}>Winson Herry</h4>
                                <span style={{ color: 'gray' }}>California</span>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid xm={12} md={3}>
                    <Box sx={{ p: 5, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', }}>
                        <Typography sx={{ textAlign: 'justify' }}>
                            It is a long established fact that by the readable content of a lot layout . The point of using lorem a more-or-less normal disturb to using content here,content..
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ marginRight: '20px' }}>
                                <img style={{ width: '70%' }} src={people3} alt="" />
                            </Box>
                            <Box >
                                <h4 style={{ color: "#56D3CE" }}>Winson Herry</h4>
                                <span style={{ color: 'gray' }}>California</span>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
};

export default PatientSays;

/* box-shadow: box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;;

box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
boxShadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;


*/