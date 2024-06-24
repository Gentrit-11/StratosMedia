import React from 'react'
import "./Footer.css";

// import { BiLogoGmail } from 'react-icons-bi';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BiEnvelope } from 'react-icons/bi';
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";




export const Bio = {

    linkedin: "https://www.linkedin.com/in/gentrit-sheremetaj-9250bb22a/",
    gmail: "",

  };
const Footer = () => {
  return (
    <div class="FooterContainer" id='footer'>
    <div class="FooterWrapper">
      <div class="Logo">Stratos Media</div>
      <nav class="Nav">
        <a href="#Home" class="NavLink">Home</a>
        <a href="#services" class="NavLink">Services</a>
        <a href="#About" class="NavLink">About Us</a>
        <a href="#ourwork" class="NavLink">Our Work</a>
        <a href="#blog" class="NavLink">Blog</a>
        <a href="#price" class="NavLink">Pricing</a>

      </nav>
      <div class="SocialMediaIcons">
      <a href="https://www.facebook.com/stratosmediaa" className="SocialMediaIcon"><FaFacebook />
      </a>
        <a href="mailto:stratosmediaa@gmail.com
" class="SocialMediaIcon"><SiGmail />
        </a>
      
     
      </div>
      <div className='number'>
      📞 (+383) 49 685 774 <br></br>
      📞 (+383) 43 906 617
      </div>
      <div class="Copyright">
        &copy; 2023 Stratos Media. All rights reserved.
      </div>
    </div>
  </div>
  
  )
}

export default Footer