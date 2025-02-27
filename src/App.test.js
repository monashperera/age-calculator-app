import { render, screen } from '@testing-library/react';
import App from './App';

test('Have a submit button', () => {
  render(<App />);
  const submitButton = screen.getByRole('button', {type: /submit/});
  expect(submitButton).toBeInTheDocument();
});
