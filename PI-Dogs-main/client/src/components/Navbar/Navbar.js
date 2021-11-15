import React from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import {outlet} from 'react-router-dom';

const NavBar = () => {

return (
    <>
      <nav>     <ul>
       <li>
        <Link to="/">Home</Link>
      </li>
        <li>
        <Link to="create">Create</Link>
        </li>
         </ul>
      </nav>
    </>
    );

};

export default NavBar;
