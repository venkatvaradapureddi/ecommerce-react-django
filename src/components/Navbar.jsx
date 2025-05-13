import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../createContext/Context';


const Navbar = () => {
  const { cartItems } = useCart();
  
  return (
    <nav className="navbar navbar-expand-lg sticky-top " style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",height:'60px' }}>
      <div className="container">
        <h2 className="fs-2"><span style={{ color: "yellow" }}>Quick </span>Buy</h2>
          
        

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse"
  id="navbarContent"
  style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)" }}>
          {/* Search Bar (Centered) */}
          <div className="d-flex mx-auto my-2 my-lg-0" style={{ maxWidth: '500px', width: '100%' }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </div>

          {/* Navigation Links (Right-Aligned) */}
          <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white px-3 fs-5  nav-hover" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white px-3 fs-5  nav-hover" to="/products">
                All Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white px-3 fs-5  nav-hover" to="/cart">
                Cart: <span className="badge bg-light text-dark">{cartItems.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;