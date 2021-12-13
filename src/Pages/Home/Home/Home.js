import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import DentalCare from '../../DentalCare/DentalCare';
import HelpLine from '../../HelpLine/HelpLine';
import PatientSays from '../../PatientSays/PatientSays';
import Services from '../../Services/Services/Services';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import OurBlog from '../OurBlog/OurBlog';
import OurDoctors from '../OurDoctors/OurDoctors';
import Bannerbg from '../../../images/bg.png';
import { Box } from '@mui/system';
import Footer from '../../Footer/Footer';


const Home = () => {
    const bannerBgStyle = {
        background: `url(${Bannerbg})`,
        backgroundColor: "rgba(47,52,82,0.8)",
        backgroundBlendMode: 'darken, luminosity',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        

    }
    return (
        <div>

            <Box style={bannerBgStyle} >
                <Navigation></Navigation>
                <Banner></Banner>
            </Box>
            <HelpLine></HelpLine>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppointmentBanner></AppointmentBanner>
            <PatientSays></PatientSays>
            <OurBlog></OurBlog>
            <OurDoctors></OurDoctors>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;