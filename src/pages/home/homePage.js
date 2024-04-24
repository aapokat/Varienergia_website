
import React from "react";
import Navbar from '../../Componenets/navbar/navbar';
import FloatBtn from '../../Componenets/FloatBtn/FloatBtn';
import Landing from '../../Componenets/landing/landing';
import About from '../../Componenets/About/About';
import Services from "../../Componenets/Services/Services";
import Contacts from '../../Componenets/Contacts/Contacts';
import Footer from '../../Componenets/Footer/Footer';


const Home = () => {
 
  return (
    <>
      <Navbar id="contacts-section"/>
      <FloatBtn/>
      <Landing id="landing-section" />
      <About id="about-section" />
      <Services id="services-section"/>
      <Contacts id="contacts-section" />
      <Footer id="footer-section"/>
    </>
  );
}

export default Home;