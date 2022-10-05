/* eslint-disable react/prop-types */
import React from 'react';

function DetailsCard({ title = 'none', value = 0, light }) {
  return (
    <div className={`detailsCard ${light ? 'light' : 'dark'}`}>
      <div className="detailsCardLeft">
        <p className="detailsCardTitle">{title}</p>
      </div>
      <div className="detailsCardRight">
        <p className="detailsCardNumber">{`${value}`}</p>
        <i className="fa-regular fa-circle-right detailsCardIcon" />
      </div>
    </div>
  );
}

export default DetailsCard;
