import React from 'react'
import { useState } from 'react';
import useClipboard from 'react-hook-clipboard'


import { FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

import '../styles/contact.css'

const size = 30;

export default function Contact() {
  
  const [call, setCall] =useState('Call me') 

  const [clipboard, copyToClipboard] = useClipboard()
  const toClipboard = '6002155269'
  
  let copy = ( ) =>{
  copyToClipboard(toClipboard) 
  setCall('Copied')
  }
  

  return (
    <>
  
     <div id='contact' className="con-container">
        <div className="con-note">
    <p>Get in Touch!</p>
    <p>Hi there! I'm Koushick Bora, a passionate Front End Developer with a love for crafting seamless user experiences.
</p>
<p>Whether you're looking to:
</p>
<p>- Discuss a project idea</p>
<p>- Collaborate on a new venture
</p>
<p>- Explore opportunities
</p>
<p>- Share knowledge and insights
</p>
<p>I'm here to connect! Feel free to reach out to me 
</p>
<p>Let's build something amazing together!
</p>
<p>
Best regards,<br />
Koushick Bora
</p>


        </div>
        <div className="reach-out">
         
          <div onClick={copy} className='con-btn'>
           
            <div><IoMdCall  size={size} /> </div>
            <div>{call}</div>
          </div>
          <a href="mailto:koushickbora1122@gmail.com">
          <div className='con-btn'>
        
            <div> <MdOutlineEmail   size={size} /></div>
            <div>Mail Me</div>
            
          </div>
            </a>
          <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/koushick-bora">

          <div className='con-btn'>
            <div><CiLinkedin  size={size} /></div>
            <div> Connect</div>
            
          </div>
          </a>
          <a href="https://www.instagram.com/koushickbora1122/"> 
          <div className='con-btn'>
            <div ><FaInstagram size={size} /></div>
            <div> Direct Me</div>
          </div>
          </a>
        </div>
     </div>
    </>
  )
}
