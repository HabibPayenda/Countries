/* eslint-disable react/prop-types */
import React from 'react';

function Card({ color }) {
  // const bgColor = (index + 1) % 2 === 0 ? 'dark' : 'light';
  // if (index === 0) {
  //   bgColor = 'light';
  // } else {
  //   bgColor = (index) % 2 === 0 ? 'dark' : 'light';
  // }
  return (
    <div className={`homeCard ${color[0]}`}>
      <div className="homeCardTop">
        Top
      </div>
      <div className="homeCardBottom">
        <p className="homeCardTitle">
          Italy
        </p>
        <p className="homeCardNumber">
          601
        </p>
      </div>
    </div>
  );
}

export default Card;
