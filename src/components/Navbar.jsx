import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Recipelist from '../pages/Recipelist/Recipelist';
import Homepage from '../pages/Homepage/Homepage';



const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Recipelist">
             Recipe
            </Link>

        </div>



    </div>
  )
}

export default Navbar