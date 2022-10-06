import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('mounts correctly', () => {
    const element = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(element).toBeTruthy();
  });
});
