import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 relative">
  <div className="flex-1">
    <Link to='/' className= "btn btn-ghost normal-case text-xl text-info">Coder's Quiz</Link>
  </div>
  <div className="flex-none gap-2">
    <div tabIndex={0} className="flex justify-evenly md:block hidden">
      <NavLink to='/home' className='mr-3 py-1 px-2 hover:bg-blue-300 rounded-md'>Home</NavLink>
      <NavLink to='/quiz' className='mr-3 py-1 px-2 hover:bg-blue-300 rounded-md'>Quiz</NavLink>
      <NavLink to='/statics' className='mr-3 py-1 px-2 hover:bg-blue-300 rounded-md'>Statics</NavLink>
      <NavLink to='/blog' className='mr-3 py-1 px-2 hover:bg-blue-300 rounded-md'>Blog</NavLink>
    </div>
    <div className="dropdown dropdown-end md:hidden">
      <label tabIndex={0} className="text-center">
        <div className="rounded-full title">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li className='mx-auto'><NavLink to='/home'>Home</NavLink></li>
        <li className='mx-auto'><NavLink to='/quiz'>Quiz</NavLink></li>
        <li className='mx-auto'><NavLink to='/statics'>Statics</NavLink></li>
        <li className='mx-auto'><NavLink to='/blog'>Blog</NavLink></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;