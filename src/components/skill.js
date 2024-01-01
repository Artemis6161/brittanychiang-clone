import React from 'react'
import "./skill.css"
import { skillItems } from './skillItem'
import { FaArrowRight } from "react-icons/fa";
import resume from "./resume.pdf"
import Headroom from 'react-headroom';

const skill = () => {
  return (
<div className='skill-container'>



   <div className="skills">
<div>
<ul>
<h4>LANGUAGE</h4>
  <li>Html</li>
  <li>Css</li>
  <li>Javascript</li>
</ul>
</div>
<div>
<ul>
<h4>FRAMEWORK</h4>
  <li>React JS</li>
  <li>Bootstrap</li>
  <li>Node JS</li>
  <li>Express</li>
</ul>
</div>
<div>
<ul>
<h4>TOOLS</h4>
  <li>Crome DevTools</li>
  <li>Git & Github</li>
  <li>MongoDB</li>
  <li>Postman</li>
  <li>Hyper</li>
</ul>
</div>
<div>
<ul>
<h4>DESIGN</h4>
  <li>Figma</li>
 
</ul>
</div>


   </div>
   <div className='resume'>
   
   <a className="link-arrow" href={resume} target='blank'>View Full Résumé <p>&#10132;</p> </a> 

  
   
 
</div>
  </div>
  )
}

export default skill
