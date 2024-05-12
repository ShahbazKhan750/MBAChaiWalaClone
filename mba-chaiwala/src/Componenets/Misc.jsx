import React from 'react';
import logo from '../Assets/logo.png';
import {BsMouse} from "react-icons/bs";
const Misc = () => {
  return (
    <>
     <div className="cursor">
        <a href="/" className='logo'>
            <img src={logo} alt="Logo" />
        </a>

        <a href="/franchise" className='franchiseBtn'>
            GET A FRANCHISE
        </a>
         <BsMouse className='scrollBtn'/>
     </div>
    </>
  )
}

export default Misc