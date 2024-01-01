import React   from 'react'

import Footer from './left_footer'
import { Link } from "react-scroll";
import './left-side.css'
import { FaGithub } from "react-icons/fa";
import { FaInstagram  } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const leftside = () => {

    
 
  
  return (
    <div className='left'>
    <div className ="left-container">
    <h1>Sangeetha Rajan</h1>
   <h2>Skilled Front-End Engineer</h2>
<h4>I build exceptional and accessible digital experiences for the web.</h4>
</div>




 

<div className="sidebar" >
<ul>
  <li >
  <Link   to="about" id='line'   
   smooth={true}
              duration={1000}
              activeClass='active'
              spy={true}>ABOUT</Link>
  </li>
  <li >
  <Link   to="skills" id='line'   
   smooth={true}
              duration={1000}
              activeClass='active'
              spy={true}>SKILLS</Link>
  </li>
  <li >
  <Link   to="project" id='line'   
   smooth={true}
              duration={1000}
              activeClass='active'
              spy={true}>PROJECT</Link>
  </li>
</ul>




   
 

  
 </div>
 <div className="icons">

 
 <a href="https://github.com/Artemis6161" target="_blank"><FaGithub className='social' color="var( --grey) " size="1.5em"/></a>
 <a href="https://www.instagram.com/spiceitupwithsan61/" target="_blank"><FaInstagram  className='social' color="var( --grey) " size="1.5em"/></a>
<a href="https://www.linkedin.com/in/sangeetha-rajan-283106198/" target="_blank"><FaLinkedin className='social' color="var( --grey) " size="1.5em"/></a>

 </div>
 <div >
 <Footer/>
 </div>


 </div>
 
  )
}

export default leftside
