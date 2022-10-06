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
      <Navbar country={data ? data.name.common : ''} />
      <Header flag={data ? data.flags.png : ''} title={data ? data.name.common : 'Southern Asia'} population={data ? data.population : 0} />
      <div className="detailsBanner">
        Country info
      </div>
      <DetailsCard light title="Area" value={data ? data.area : ''} />
      <DetailsCard title="Latitude" value={data ? data.latlng[0] : 0} />
      <DetailsCard light title="Longitude" value={data ? data.latlng[1] : 0} />
      <DetailsCard title="Time Zone" value={data ? data.timezones[0] : ''} />
      <DetailsCard light title="Capital Latitude" value={data ? data.capitalInfo.latlng[0] : ''} />
      <DetailsCard title="Capital Longitude" value={data ? data.capitalInfo.latlng[1] : ''} />
    </div>
  );
}

export default DetailScreen;
