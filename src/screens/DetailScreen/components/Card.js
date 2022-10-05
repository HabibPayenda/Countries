/* eslint-disable react/prop-types */
import React from 'react';

function DetailsCard({ name, population }) {
  return (
    <div className="detailsCard">
      <div className="detailsCardLeft">
        <p className="detailsCardTitle">{name}</p>
      </div>
      <div className="detailsCardRight">
        <p className="detailsCardNumber">{`${Math.round(population / 1000000)} M`}</p>
        <i className="fa-regular fa-circle-right detailsCardIcon" />
      </div>
    </div>
  );
}

export default DetailsCard;
