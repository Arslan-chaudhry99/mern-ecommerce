import React from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
const Nav = () => {
  const showMenu = useRef();
  const Navigate = useNavigate();
  const expandNav = () => {
    if (showMenu.current.classList.contains("active")) {
      return showMenu.current.classList.remove("active");
    }
    return showMenu.current.classList.add("active");
  };

  return (
    <>
      <header>
        <div id="top-header">
          <div className="container">
            <ul className="header-links pull-left">
              <li>
                <a href="#">
                  <i className="fa fa-phone"></i> +021-95-51-84
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope-o"></i> email@email.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-map-marker"></i> 1734 Stonecoal Road
                </a>
              </li>
            </ul>
            <ul className="header-links pull-right">
              <li>
                <a href="#">
                  <i className="fa fa-dollar"></i> USD
                </a>
              </li>
              <li style={{cursor:"pointer"}}>
                <a onClick={()=>{Navigate("/Profile")}}>
                  <i className="fa fa-user-o"></i> My Account
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="header-search">
                  <form>
                    {/* <select className="input-select">
                      <option value="0">All Categories</option>
                      <option value="1">Category 01</option>
                      <option value="1">Category 02</option>
                    </select> */}
                    <input className="input" placeholder="Search here" />
                    <button className="search-btn">Search</button>
                  </form>
                </div>
              </div>

              <div className="col-md-3 clearfix">
                <div className="header-ctn">
                  <div>
                    <a onClick={()=>{Navigate("/wishlist")}} style={{cursor:"pointer"}}>
                      <i className="fa fa-heart-o"></i>
                      <span>Your Wishlist</span>
                      <div className="qty">2</div>
                    </a>
                  </div>

                  <div className="" onClick={() => {Navigate("/cart")}}>
                    <a style={{ cursor: "pointer" }}>
                      <i className="fa fa-shopping-cart"></i>
                      <span>Your Cart</span>
                      <div className="qty">3</div>
                    </a>
                  </div>

                  <div className="menu-toggle" onClick={expandNav}>
                    <a>
                      <i className="fa fa-bars"></i>
                      <span>Menu</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav id="navigation" style={{ border: "0" }}>
          <div class="container">
            <div id="responsive-nav" ref={showMenu} className="">
              <ul class="main-nav nav navbar-nav">
                <li class="active">
                  <NavLink to="/">
                    <a>Home</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/store">
                    <a>Store</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    <a>About</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    <a>Contact</a>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
