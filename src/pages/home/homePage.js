
import React from "react";

import Navbar from '../../Componenets/navbar/navbar';
import Landing from '../../Componenets/landing/landing';
import About from '../../Componenets/About/About';
import Services from "../../Componenets/Services/Services";
import Contacts from '../../Componenets/Contacts/Contacts';
import Footer from '../../Componenets/Footer/Footer';


const Home = () => {
 
  return (
    <>
      <Navbar />
      <Landing id="landing-section" />
      <About id="about-section" />
      <Services/>
      <Contacts id="contacts-section" />
      <Footer />
    </>
  );
}

export default Home;