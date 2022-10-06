import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomeScreen from '../screens/HomeScreen';
import store from '../Redux/configurStore';

describe('HomeScreen', () => {
  it('mounts correctly', () => {
    const element = render(
      <Provider store={store}>
        <BrowserRouter>
          <HomeScreen />
        </BrowserRouter>
      </Provider>,
    );
    expect(element).toBeTruthy();
  });
});
