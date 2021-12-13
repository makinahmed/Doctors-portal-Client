import React from 'react';
import BannerImage from '../../../images/chair.png';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
 


const Banner = () => {
    return (
        <Box sx={{padding:'90px 0'}} >
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6} style={{ textAlign: 'left', alignItems: 'center' }}>
                        <Box>
                            <Typography variant="h3" >
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: 14, color: 'gray', my: 5, fontWeight: 300 }}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur optio quasi sunt ducimus repellat reprehenderit non magni harum distinctio?
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor: '#56D3CE', opacity: .7 }}>Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img style={{ width: '100%' }} src={BannerImage} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;