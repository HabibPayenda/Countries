import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import DetailsCard from './components/Card';
import { getCountry } from '../../Redux/detailSlice';

function DetailScreen() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state.country);
  useEffect(() => {
    dispatch(getCountry(state.capital));
  }, []);
  let data = null;
  if (country.length > 0) {
    // eslint-disable-next-line prefer-destructuring
    data = country[0];
  }
  return (
    <div style={{ width: '100%' }}>
      <Navbar />
      <Header />
      <DetailsCard name={data ? data.name.common : ''} />
      <DetailsCard />
      <DetailsCard />
      Details
    </div>
  );
}

export default DetailScreen;
