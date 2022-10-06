/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function List({ data }) {
  const classes = [];
  const toDisplay = data.map((item) => (
    <Link
      style={{ textDecoration: 'none' }}
      key={item.ccn3}
      to={`details:${item.name.common}`}
      state={{ capital: item.capital[0] }}
    >
      <Card name={item.name.common} population={item.population} flag={item.flags.png} color={[]} />
    </Link>
  ));

  for (let c = 0; c < data.length; c += 1) {
    if (classes.length <= data.length) {
      if (c === 0) {
        classes.push('light');
      } else if (c % 2 === 0) {
        classes.push('light');
        classes.push('light');
      } else if (c % 2 !== 0) {
        classes.push('dark');
        classes.push('dark');
      }
    }
  }

  toDisplay.forEach((card, index) => {
    card.props.children.props.color.push(classes[index]);
  });

  const numberOfRows = Math.round(data.length / 2);
  let rows = '';
  for (let j = 0; j < numberOfRows; j += 1) {
    rows += ' 18rem';
  }
  return (
    <>
      <div className="homeListTitle">STATS BY COUNTRY</div>
      <div
        className="homeList"
        style={{
          gridTemplateRows: rows,
        }}
      >
        {toDisplay}
      </div>
    </>
  );
}

export default List;
