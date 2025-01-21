import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Navbar from '../../Componenets/navbar/navbar';
import FloatBtn from '../../Componenets/FloatBtn/FloatBtn';
import Landing from '../../Componenets/landing/landing';
import About from '../../Componenets/About/About';
import Services from "../../Componenets/Services/Services";
import Feedback from '../../Componenets/Feedback/Feedback';
import Contacts from '../../Componenets/Contacts/Contacts';
import Footer from '../../Componenets/Footer/Footer';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.substring(1), {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, [location]);

  return (
    <>
      <Navbar id="contacts-section"/>
      <FloatBtn/>
      <Landing id="landing-section" />
      <About id="about-section" />
      <Services id="services-section"/>
      <Feedback id="feedback-section"/>
      <Contacts id="contacts-section" />
      <Footer id="footer-section"/>
    </>
  );
}

export default Home;
