import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(
      <App />
    );

    // Utilisez screen.getByTestId pour interroger votre composant
    expect(screen.getByTestId('navigations')).toBeInTheDocument();
  });
});
