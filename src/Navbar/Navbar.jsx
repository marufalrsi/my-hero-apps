import React, { useState } from 'react';
import logo from '../assets/logo.png';
import github from '../assets/Vector.png';
import { Link } from 'react-router';

const Navbar = () => {
  const [home,sethome]=useState(true)
  const [app, setapp]=useState(false)
  const [install,setinstall]=useState(false)
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm max-w-6xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li><Link to="/" className='font-semibold'>Home</Link></li>
      <li>
        
        <Link to="/apps" className='font-semibold'>Apps</Link>
      </li>
      <li><Link to="/installations" className='font-semibold'>Installation</Link></li>
    </ul>
    </div>
    
    <Link to="/" className="btn btn-ghost text-[16px] font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"><img className="h-6 w-6" src={logo} alt="Logo" />HERO.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/" className={`font-semibold ${home === true ? 'bg-blue-300' : ''}`}  onClick={()=>{setapp(false);sethome(true);setinstall(false)}}>Home</Link></li>
      <li>
        
        <Link to="/apps" className={`font-semibold ${app === true ? 'bg-blue-300' : ''}`} onClick={()=>{setapp(true);sethome(false);setinstall(false)}}>Apps</Link>
      </li>
    <li><Link to="/installations" className={`font-semibold ${install === true ? 'bg-blue-300' : ''}`} onClick={()=>{setapp(false);sethome(false);setinstall(true)}}>Installation</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="https://github.com/" className="btn bg-linear-90 from-indigo-500 to-purple-500 text-white"><img className="h-6 w-6" src={github} alt="GitHub" /> Contribute</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;