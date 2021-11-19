// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home.screen.tsx';

test('should render default elements', () => {
  render(<Home />);
  const text = screen.getByText(/current data:/i);
  expect(text).toBeInTheDocument();
});
