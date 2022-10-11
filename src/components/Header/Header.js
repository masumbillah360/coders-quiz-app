import React from 'react';

const Header = () => {
    return (
        <div className='p-8 flex flex-col bg-slate-200 text-center rounded'>
            <h1 className='text-3xl font-bold text-info'>Coder's Quiz App</h1>
            <p className='mt-2'>This is simple Quiz App for <span className='text-info'>New</span> Coder's. It's helpfull for new coder's how to solve a quize.</p>
        </div>
    );
};

export default Header;