import React from 'react'

function Navbar() {
  return (
    <div
      id="header"
      className="fixed-top d-flex justify-content-center align-items-center header-transparent"
    >
      <div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar