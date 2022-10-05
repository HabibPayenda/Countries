/* eslint-disable react/prop-types */
import React from 'react';

function Header({ population, title = 'Southern Asia', flag }) {
  return (
    <div className="header">
      <div className="headerLeft">
        <img className="headerImg" src={flag} alt={title} />
      </div>
      <div className="headerRight">
        <p className="headerRightTitle">
          {
          title
          }
        </p>
        <p className="headerRightSubTitle">{`${Math.round(population / 1000000)} M  People`}</p>
      </div>
    </div>
  );
}

export default Header;
