import React from 'react'
import '../styles/intro.css'
import img from '../assets/portfolio.png'

export default function Intro() {
  return (
    <>
     <main>
    <div className="intro">

      <div className="img">
        <img src={img} alt="img"/>
      </div>
        <div className="intro-txt">
          <p> Welcome to my portfolio! I'm <b>Koushick Bora</b>, a dynamic and passionate 22-year-old aspiring <b>Frontend Developer</b>, currently pursuing a <b>Bachelor's degree in Chemistry</b>. My journey into the world of coding began as a self-learner, fueled by an insatiable curiosity and a drive to explore the limitless possibilities of technology.</p>
          <p className='lower-line'>In my pursuit of excellence, I further honed my skills at <i>Digikull</i>, an institution that played a pivotal role in shaping my understanding of the intricate nuances of frontend development. Through hands-on projects, collaborative learning, and exposure to the latest industry practices, I've cultivated a robust foundation in front-end technologies.</p>
          <p  className='lower-line'> Let's embark on this digital adventure together, where creativity meets functionality, and every line of code tells a unique story. Welcome to the digital realm of Koushick Bora, where innovation knows no bounds!</p>
         
        </div>
    </div>
  </main>
    </>
  )
}
