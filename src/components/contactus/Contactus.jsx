

import React from 'react'
import "./Contactus.css";
import { useState } from 'react';
import axios from 'axios';

const Contactus = () => {
const [name, setName]=useState('');
const [email, setEmail]=useState('');
   const handleSubmit=() =>{
    if(name.length===0 && email.length===0){
      alert("Form blank");
      }
else if(name.length===0){
alert("Name blank")
}else if(email.length===0){
  alert("Email blank")
  }
  
  else{
  const url='http://localhost/Form.php';
  let fData=new FormData();
  fData.append('name', name);
  fData.append('email', email);
  axios.post(url,fData).then(response=>alert(response.data))
  .catch(error =>alert(error));
  }
   }

  return (
    <div class="container" id='contactus'>
      
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Prishtinë</div>
          <div class="text-two">10000</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+3834955555</div>
          <div class="text-two">+383555555</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">gentritsheremetaj3@gmail.com</div>
          <div class="text-two">info@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any question contact us.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        
        <div class="button">
          <input type="button" value="Send Now" onClick={handleSubmit}/>
        </div>
      </form>
    </div>
    </div>
  </div>
  )
}

export default Contactus

