import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Service from '../../Home/Service/Service';
import flouride from '../../../../src/images/fluoride.png';
import cavity from '../../../../src/images/cavity.png';
import whitening from '../../../../src/images/whitening.png'
import { Container } from '@mui/material';
const obj = [
    {
        name: 'Fluoride Treatment',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis molestiae id incidunt, explicabo cum minus excepturi odio? Dignissimos dolorum quisquam voluptatibus, blanditiis, sunt adipisci porro aliquam, minus nobis veritatis ex.",
        img: flouride
    },
    {
        name: "Cavity Flling",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis molestiae id incidunt, explicabo cum minus excepturi odio? Dignissimos dolorum quisquam voluptatibus, blanditiis, sunt adipisci porro aliquam, minus nobis veritatis ex.",
        img: cavity
    },
    {
        name: "Teeth Whitening ",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis molestiae id incidunt, explicabo cum minus excepturi odio? Dignissimos dolorum quisquam voluptatibus, blanditiis, sunt adipisci porro aliquam, minus nobis veritatis ex.",
        img: whitening
    }
]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h5" sx={{fontWeight: 'bold',color: "success.main",m: 2,}}  conponent="div">
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" sx={{fontWeight: '600',m:2}} conponent="div">
                    Services we provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {obj.map((service, index) => (
                        <Service
                            key={service.name}
                            service={service}
                        ></Service>

                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;