import React from "react";
import "./Homemain.css";
import { HashLink as Link } from "react-router-hash-link";

import logo from '../Navbar/images/logo.jpg';
import Navbar from "../Navbar/Navbar";

const Homemain = () => {
  return (
    <div className="background" id="Home">
      <div className="text">
        <h1 className="text-h1">Execute your Marketing idea with Stratos Media 
        </h1>
        <p className="p-h">
          We are a creative Digital Marketing company who loves helping clients grow. We create
          products that you can use to achieve your purposes.
        </p>
        <div className="links-h">
          <Link to="#footer" className="button-h">
            <span>Work with us</span>
          </Link>
          <div className="bg-h"></div>
        </div>
      </div>
    </div>
  );
};
export default Homemain;
