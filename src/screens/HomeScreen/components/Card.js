/* eslint-disable react/prop-types */
import React from 'react';

function Card({
  color, name, population, flag,
}) {
  // const bgColor = (index + 1) % 2 === 0 ? 'dark' : 'light';
  // if (index === 0) {
  //   bgColor = 'light';
  // } else {
  //   bgColor = (index) % 2 === 0 ? 'dark' : 'light';
  // }
  return (
    <div className={`homeCard ${color[0]}`}>
      <div className="homeCardTop">
        <i className="fa-regular fa-circle-right cardIcon" />
        <img className="homeCardTopImg" src={flag} alt={name} />
      </div>
      <div className="homeCardBottom">
        <p className="homeCardTitle">{name}</p>
        <p className="homeCardNumber">{`${Math.round(population / 1000000)} M`}</p>
      </div>
    </div>
  );
}

export default Card;
