import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a href='#' className= "btn btn-ghost normal-case text-xl">Coder's Quiz</a>
  </div>
  <div className="flex-none gap-2">
    <div className="flex justify-evenly">
      <a href="#" className='mr-3'>Home</a>
      <a href="#" className='mr-3'>Quiz</a>
      <a href="#" className='mr-3'>Details</a>
      <a href="#" className='mr-3'>About</a>
    </div>
    <div className="dropdown dropdown-end lg:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt='' />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li className='mx-auto'><a>Home</a></li>
        <li className='mx-auto'><a>Quiz</a></li>
        <li className='mx-auto'><a>Details</a></li>
        <li className='mx-auto'><a>About</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;