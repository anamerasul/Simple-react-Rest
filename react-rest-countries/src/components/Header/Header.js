import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='bg-primary'>
            <h1> Welcome to my Countries</h1>
            <nav className='text-white'> 
                <a  href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/country">Country</a>
            </nav>
        </div>
    );
};

export default Header;