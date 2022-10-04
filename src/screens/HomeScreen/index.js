import React from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import List from './components/List';

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />
      <Header />
      <List />
    </div>
  );
}

export default HomeScreen;
