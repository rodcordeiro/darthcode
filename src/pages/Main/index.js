import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import SithEmblem from '../../assets/SithEmblemTOR.png';

function MainPage() {
  return (
    <div className="container">
      <header>
        <img className="logo" src={SithEmblem} alt="SithEmblem" />
        <nav>
          <ul>
            <li><Link className="menuLink active" to="/" onClick={()=>{}}>Home</Link></li>
            <li><Link className="menuLink" to="/Projects" onClick={()=>{}}>Projects</Link></li>
            <li><Link className="menuLink" to="/" onClick={()=>{}}>About Us</Link></li>
            <li><Link className="menuLink" to="/" onClick={()=>{}}>Contact</Link></li>
          </ul>
        </nav>
      </header>
      <div className="mainContent">
        <h1>DARTH CODE</h1>
        <p>
          Inspired by the force, we are Darth Coders that are building the world.
        </p>
      </div>
    </div>
  );
}

export default MainPage;
