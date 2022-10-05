import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/details" exact element={<DetailScreen />} />
      </Routes>
    </div>
  );
}

export default App;
