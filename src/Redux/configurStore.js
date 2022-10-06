import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import homeReducers from './homeSlice';
import countryReducer from './detailSlice';

const store = configureStore({
  reducer: {
    countries: homeReducers,
    country: countryReducer,
  },
}, applyMiddleware(thunk));

export default store;
