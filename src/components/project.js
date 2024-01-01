import React from 'react'
import "./project.css"


import netflix from "../img/netflix.png"
import { ProjectItems } from './projectItems'
const project = () => {
  return (
    <div className='project'>


  
    
      { ProjectItems.map((item,index) => {

        return (
          <div className="card" key={index}>
          

          <a href={item.url} target="_blank" rel="noopener noreferrer" className='arrow'>
         
        
            <div className="card-info">
            <div className="card-img">
              <img src={item.image} alt="" />
            </div>
<div className='card-discription'>
         <div className="title">
         <h4>{item.title}</h4>
        
</div>     
                 
<p>{item.description}</p>
</div>
         
             
            
            
             
              </div>
              </a>
      
          
          </div>
        )

      })}
      
      </div>

  )
}

export default project
