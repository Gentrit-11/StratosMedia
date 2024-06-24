import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Homemain from "../components/Home/Homemain";
import Services from "../components/Services/services";
import AboutUs from "../components/About-us/AboutUs";
import Blog from "../components/Blog/Blog";
import Contactus from "../components/contactus/Contactus";
import OurWork from "../components/Ourwork/OurWork";
import Footer from "../components/Footer/Footer"
import Price from "../components/Price/Price"
import Scroll from "../components/Scroll/Scroll"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Homemain />

      <Services />

      <AboutUs />
      <OurWork />

      <Blog/>
      <Price/>
      <Footer/>
      <Scroll/>
    </div>
  );
};

export default Home;
