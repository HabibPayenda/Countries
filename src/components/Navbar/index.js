import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-right">
        <i className="fa-solid fa-chevron-left" />
        2015
      </div>
      <div className="navbar-middle">most views</div>
      <div className="navbar-left">
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </div>
    </div>
  );
}

export default Navbar;
