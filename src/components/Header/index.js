/* eslint-disable react/prop-types */
import React from 'react';

function Header({ population }) {
  return (
    <div className="header">
      <div className="headerLeft">map</div>
      <div className="headerRight">
        <p className="headerRightTitle">Southern Asia</p>
        <p className="headerRightSubTitle">{`${Math.round(population / 1000000)} M  People`}</p>
      </div>
    </div>
  );
}

export default Header;
