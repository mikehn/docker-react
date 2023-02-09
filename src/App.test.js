import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mikes', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mikes/i);
  //console.log(">>>", linkElement)
  expect(linkElement).toBeInTheDocument();
});

test('sanity', () => {
  render(<App />);
  expect(1).toEqual(1);
});
