import React from 'react';
import logo from '../../assets/react.svg';
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../CartWidget';
import { Link, NavLink } from 'react-router-dom';



import './styles.css';


const Navbar = ({ data }) => {

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="" />
        </a>

        <Link to="/" className="" id="HomeButton">
          Inicio
        </Link>



        <ul className="navbar-nav d-flex flex-row">
          {data.map((category) => (
            <li key={category.id} className="nav-item">
              <Link
                className="nav-link"
                to={category.path}

              >
                {category.name}
              </Link>
            </li>

          ))}
          <NavLink to='/cart'> <CartWidget /> </NavLink>

        </ul>
      </div>
    </nav>

  );

};



export default Navbar;
