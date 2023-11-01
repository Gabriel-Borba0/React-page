import './NavBar.css'
import React, { useState, useEffect } from 'react';
import LogoStarBank from '../../Assets/LogoStarbank.png'

 const NavBar = () =>{
    const [scrolled,setScrolled] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
            <div className ='left-side'>
                <img src={LogoStarBank} alt='logo'/>

                
            </div>
            
            <div className='right-side'>
            <div >
             
            </div>
              <div>
                
              </div>
              <div>
               
              </div>
                </div>

            </div>
            
        
    )
    

}
export default NavBar;