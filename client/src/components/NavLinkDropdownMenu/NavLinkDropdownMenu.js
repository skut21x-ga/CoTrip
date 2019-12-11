import React from 'react';
import { Link } from 'react-router-dom';
import "./NavLinkDropdownMenu.css";

const NavLinkDropdownMenu = (props) => (
  <ul className='NavLinkDropdownMenu'>
    {props.menuList.map(li => 
      <Link to={li.to}>
        <li>{li.text}</li>
      </Link>
    )}
  </ul>
);

export default NavLinkDropdownMenu;