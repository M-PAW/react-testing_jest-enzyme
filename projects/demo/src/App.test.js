import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// This is the name of the test that
// shows if it fails
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  //throw new Error;
});
