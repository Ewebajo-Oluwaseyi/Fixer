import React, { useState } from 'react';

function Nav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="header">
       <a href="/" className="logo">
            Fixer
           <i className="fas fa-exchange-alt mx-2"></i>
       </a>
       <nav>
           <div className='humburger humburger-open'>
               {openNav ? <i className='fas fa-times' onClick={() => setOpenNav(!openNav)}></i> :
               <i className='fas fa-bars' onClick={() => setOpenNav(!openNav)}></i>
                }   
           </div>
           <ul className={openNav ? 'nav-links open': 'nav-links'}>
            <li className={openNav ? 'nav-item fade': 'nav-item'}>
                <a href="/">Home</a>
            </li>
            <li className={openNav ? 'nav-item fade': 'nav-item'}>
                <a href="/calculator">Calculator</a>
            </li>
            <li className={openNav ? 'nav-item fade': 'nav-item'}>
                <a href="/about">About</a>
            </li>
           </ul>
       </nav>
    </div>
  );
}

export default Nav;
