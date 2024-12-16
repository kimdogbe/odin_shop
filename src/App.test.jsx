import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


describe('App component', () => {
  it('renders nav and heading', () => {
    render(<App />, {wrapper: BrowserRouter});
    
    expect(screen.getByRole("h1").textContent).toMatch(/Hello and welcome to our store/i);
  });
});

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

