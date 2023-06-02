import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi'
import "./navbar.css";

const Navbar = () => {
    const [showMediaIcons,setShowMediaIcons]=useState(false);
  return (
    <>
        <nav className='main-nav'>
        {/* 1st logo part */}
        <div className='logo'>            
                ShowTime
        </div>

        {/* 2nd menu part */}
            <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Resources</a>
                    </li>
                </ul>
            </div>

            {/* 3rd search and start button     */}
            <div className='search-start'>
                <ul className='search-start-desktop'>
                    <li>
                        <form action='#'>
                            <input type='text' placeholder='Search..' name='search'/>
                            <button><BiSearchAlt className='search' /></button>                        
                        </form>
                        
                    </li>
                    
                        <button className='start'>Get Started</button>
                    
                </ul>
                  {/* hamburget menu start  */}
            <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
            </a>
            </div>
            </div>

        </nav>
    </>
)
}

export default Navbar