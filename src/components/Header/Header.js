import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='p-8 flex flex-col text-center rounded bg-image'>
            <img className='w-28 mx-auto' src="header-photo.png" alt="" />
            <h1 className='text-3xl font-bold text-white'>Coder's Quiz App</h1>
            <p className='mt-2 text-white'>This is simple Quiz App for <span className='text-info'>New</span> Coder's. It's helpfull for new coder's how to solve a quize.</p>
        </div>
    );
};

export default Header;