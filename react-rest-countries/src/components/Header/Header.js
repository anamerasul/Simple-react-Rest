import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to my website</h1>
            <nav className=''>
                <a href="/home">HOME</a>
                <a href="/shop">SHOP</a>
                <a href="/about">ABOUT</a>
            </nav>
        </div>
    );
};

export default Header;