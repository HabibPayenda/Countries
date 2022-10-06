import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../Redux/configurStore';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('mounts correctly', () => {
    const element = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );
    expect(element).toBeTruthy();
  });
});
