import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { navBar } from './NavBar2';

const Navbar = () => {

    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
            // color: isActive ? 'black' : 'purple'
        }
    }
    return (
        <div className='m-4 col-md-6'>
            <nav>
                <NavLink style={navLinkStyle} to='/'>Home</NavLink>
                {navBar.map((t) =>
                    <NavLink style={navLinkStyle} to={'/' + t.service}>{t.name}</NavLink>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
