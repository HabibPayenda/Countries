import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import homeReducers from './homeSlice';

const store = configureStore({
  reducer: {
    countries: homeReducers,
  },
}, applyMiddleware(thunk));

export default store;
