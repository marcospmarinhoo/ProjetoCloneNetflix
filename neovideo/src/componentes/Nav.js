import React from 'react'
import "./Nav.css"
import { useEffect } from 'react';

function Nav() {
    const [show, setShow ] = React.useState(false);

    useEffect(() => {
     window.addEventListener("scroll", ()=>{
        setShow(window.scrollY > 100);
     });
    
      return () => {
        //window.removeEventListener("scroll")
      };
    }, []);
    

  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
        <img className='nav-logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"></img>
        <img className='nav-avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFLYeYOEUzb3" alt="Marcos"></img>
    </div>
  )
}

export default Nav