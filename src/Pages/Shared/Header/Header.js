import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/home'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/about'>About</Link>

        </nav>
    );
};

export default Header;