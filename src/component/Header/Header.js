import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Programming Tutorial</a>
    <img src="../Header/Rose Gold Brush Glitter Feminine Boutique Circle Logo.png" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
        <li><Link to={'/courses'}>Courses</Link></li>
        <li tabIndex={0}>
        <Link to={'/faq'}>FAQ</Link>
        </li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/register'}>Register</Link></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;