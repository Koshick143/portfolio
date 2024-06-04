import React from 'react'
import  '../styles/navbar.css'

export default function Navbar() {
  return (
    <>
         <div className='nav-head'>
   
   <h2 id="title">Koushick Bora</h2>

   <div className='nav'>
   {/* <div><a href=""><h2>About me</h2></a></div>  */}
   <div><a href="#project"><h2>Project</h2></a></div>
   <div><a href="#contact"><h2>Contact</h2></a></div>  
   
   </div>
   
   
  </div>
    </>
  )
}
