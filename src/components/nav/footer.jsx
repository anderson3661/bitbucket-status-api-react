import React from 'react';
import { NavLink } from 'react-router-dom';

import { PATH_WIDGETS, PATH_CONTACT, PATH_ABOUT, COPYRIGHT } from '../../utilities/constants';

import './footer.scss';


const Footer = () => {
    return (
        <footer>
            <div className="links">
                <div><NavLink to={PATH_WIDGETS} className="nav-link">Home</NavLink></div>
                <div><NavLink to={PATH_CONTACT} className="nav-link">Contact</NavLink></div>
                <div><NavLink to={PATH_ABOUT} className="nav-link">About</NavLink></div>
            </div>
            &copy; {COPYRIGHT}
        </footer>
    );
};

export default Footer;