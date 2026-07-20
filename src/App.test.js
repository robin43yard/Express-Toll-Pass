import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Express Toll Pass dashboard title', () => {
  render(<App />);
  const headerElement = screen.getByText(/Express Toll Pass/i);
  expect(headerElement).toBeInTheDocument();
});
