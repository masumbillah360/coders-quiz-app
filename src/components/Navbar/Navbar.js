import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to='/' className= "btn btn-ghost normal-case text-xl">Coder's Quiz</Link>
  </div>
  <div className="flex-none gap-2">
    <div tabIndex={0} className="flex justify-evenly lg:block hidden">
      <Link to='/' className='mr-3'>Home</Link>
      <Link to='/quiz' className='mr-3'>Quiz</Link>
      <Link to='/statics' className='mr-3'>Statics</Link>
      <Link to='/blog' className='mr-3'>Blog</Link>
    </div>
    <div className="dropdown dropdown-end lg:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li className='mx-auto'><Link to='/'>Home</Link></li>
        <li className='mx-auto'><Link to='/quiz'>Quiz</Link></li>
        <li className='mx-auto'><Link to='/statics'>Statics</Link></li>
        <li className='mx-auto'><Link to='/blog'>Blog</Link></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;