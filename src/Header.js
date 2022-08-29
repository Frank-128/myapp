
import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  let user=JSON.parse(localStorage.getItem('user-info'))
 const  navigate=useNavigate();
  function logOut(){
    localStorage.clear();
    navigate('/register');
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark px-2  bg-dark">
      <h1 className="text-success">Myapp</h1>
    <h2>frank</h2>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {localStorage.getItem("user-info") ? (
            <>
            <li className="nav-item">
                <Link className="nav-link" to="/">
                  ProductList
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addproduct">
                  AddProduct
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/updateproduct/:id">
                  UpdateProduct
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  Search Product
                </Link>
              </li>
            
            </>
          ) : (
            <>
              <li className="nav-item ">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {(localStorage.getItem("user-info"))?
      <Nav >
            <NavDropdown title={user && user.name }>
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
    </Nav>:null}
    
    </nav>
      </>
  );
};

export default Header;
