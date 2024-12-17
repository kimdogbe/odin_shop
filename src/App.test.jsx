import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Shop from './Shop';
import userEvent from '@testing-library/user-event';

describe('App component', () => {
  it('renders main logo', () => {
    render(<App />, {wrapper: BrowserRouter});
    expect(screen.getByRole('heading').textContent).toMatch("Kays Shop");
  });

  it('renders all links', () => {
    render(<App />, {wrapper: BrowserRouter});
    expect(screen.getAllByRole('link')).toHaveLength(4);
  });

  it('renders correct link names and paths', () => {
    render(<App />, {wrapper: BrowserRouter});
    expect(screen.getAllByRole('link').map(link => link.textContent)).toContain('About');
    expect(screen.getAllByRole('link').map(link => link.textContent)).toContain('Shop');
    expect(screen.getAllByRole('link').map(link => link.textContent)).toContain('Checkout');
  });

  it('app snapshot', () => {
    const { container } = render(<App />, {wrapper: BrowserRouter});
    expect(container).toMatchSnapshot();

  });

});

describe('Home component', () => {
  it('renders heading and text', () => {
    render(<Home />, {wrapper: BrowserRouter});
    
    expect(screen.getByRole("heading").textContent).toMatch(/Hello and welcome to our store/i);
    expect(screen.getByRole("paragraph").textContent).toMatch(/We hope you find what you're looking for/i);
  });

  it('home page snapshot', () => {
    const { container } = render(<Home />, {wrapper: BrowserRouter});
    expect(container).toMatchSnapshot();
  });
});


// describe('Shop component', () => {  
//   it('renders heading and text', () => {
//     render(<Shop context={[]} />, {wrapper: BrowserRouter});
    
//     // expect(screen.getByRole("heading").textContent).toMatch(/shop page/i);
//     expect(screen.getByRole("paragraph").textContent).toMatch(/hello and welcome to our store!/i);
//   })
// })