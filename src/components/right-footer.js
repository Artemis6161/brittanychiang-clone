import React from 'react'
import gif from '../img/gif.gif'
import "./right-footer.css"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import circles from '../img/Circles.gif'
import { IoMdClose } from "react-icons/io";
const rightfooter = () => {
  
  return (
    <div className='right_footer'>
    {/* <img src={circles} alt="gif" /> */}
 <Popup trigger= 

      {<img src={gif} alt="gif" />}
      modal nested>
  {
                    close => (
                      
 <div className="form">
 <div className='icon'>
                                {/* <button > */}
                                        <IoMdClose onClick=
                                    {() => close()}/>
                                {/* </button> */}
                            </div>
 <h2>FEEDBACK</h2>
 
      <form action="mailto:sangeetha6161@gmail.com" method="get" enctype="text/plain">
        <input type="text" placeholder='Enter your name' name="name" />
        <input type="email" placeholder='Enter your email' name="email"/>
        <textarea type="text" rows="5" cols="30" placeholder="Your Message" name="message"></textarea>
        <input type="submit" value="Send"/>
      </form>
   
    </div>
                    )}
    </Popup>
    
    </div>
  )
}

export default rightfooter
