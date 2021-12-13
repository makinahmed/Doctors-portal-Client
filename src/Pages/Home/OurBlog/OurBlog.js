import { Button, Card, CardActions, CardContent, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img1 from '../../../images/people-1.png'
import img2 from '../../../images/people-2.png'
import img3 from '../../../images/people-3.png'
import bg from '../../../images/bg.png'
const OurBlog = () => {
    const style = {
        backgroundColor: '#56D3CE',

    }
    return (
        <Container >
            <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }} >
                OUR BLOG
            </Typography>
            <Typography variant="h3">
                From Our Blog News
            </Typography>
            <Grid sx={{ my: 5 }} container gap={2}>
                <Grid xm={12} md={3}>
                    <Card style={style} 
                     sx={{ maxWidth: 275 }}>
                        <CardContent sx={{ textAlign: 'left' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Box sx={{ marginLeft: -20 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 600, }}>
                                        Dr.Caudi
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} variant="small" color="text.secondary" gutterBottom>
                                        23 April 2019
                                    </Typography>
                                </Box>

                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 500 }} component="div">
                                Check at least a doctor in a year for your teeth
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xm={12} md={3}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Box>
                                    <img style={{ width: '80%' }} src={img2} alt="" />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        Dr.Caudi
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} variant="small" color="text.secondary" gutterBottom>
                                        23 April 2019
                                    </Typography>
                                </Box>

                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 500 }} component="div">
                                2 times of brush in a day can keep you healthy
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                It is a long established fact that by the readable content of a lot layout. The point...
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xm={12} md={3}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Box>
                                    <img style={{ width: '80%' }} src={img2} alt="" />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        Dr.Caudi
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} variant="small" color="text.secondary" gutterBottom>
                                        23 April 2019
                                    </Typography>
                                </Box>

                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 500 }} component="div">
                                2 times of brush in a day can keep you healthy
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                It is a long established fact that by the readable content of a lot layout. The point...
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurBlog;