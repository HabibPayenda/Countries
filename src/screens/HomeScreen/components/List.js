/* eslint-disable no-param-reassign */
import React from 'react';
import Card from './Card';

function List() {
  const data = [];

  const classes = [];

  for (let i = 0; i < 10; i += 1) {
    data.push(<Card color={[]} index={i} />);
  }

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

  data.forEach((card, index) => {
    card.props.color.push(classes[index]);
  });

  const numberOfRows = Math.round(data.length / 2);
  let rows = '';
  for (let j = 0; j < numberOfRows; j += 1) {
    rows += ' 10rem';
  }
  return (
    <div
      className="homeList"
      style={{
        gridTemplateRows: rows,
      }}
    >
      {data}
    </div>
  );
}

export default List;
