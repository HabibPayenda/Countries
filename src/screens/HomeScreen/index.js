import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import List from './components/List';
import { getCountries } from '../../Redux/homeSlice';

function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const { countries } = useSelector((state) => state.countries);
  let totalPopulation = 0;
  for (let i = 0; i < countries.length; i += 1) {
    totalPopulation += JSON.parse(countries[i].population);
  }
  return (
    <div className="homeScreen">
      <Navbar />
      <Header population={totalPopulation} />
      <List data={countries} />
    </div>
  );
}

export default HomeScreen;
