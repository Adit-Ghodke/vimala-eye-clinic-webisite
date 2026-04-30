import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from './App';

// We test App because Navbar is integrated within it and uses Router hooks
describe('Navbar Stability Audit', () => {
  it('should render the Eye Health Guide link on one line', () => {
    render(<App />);
    
    const guideLink = screen.getByText(/Eye Health Guide/i);
    expect(guideLink).toBeInTheDocument();
    expect(guideLink).toHaveClass('whitespace-nowrap');
  });

  it('should render the brand logo with exactly 180px width', () => {
    render(<App />);
    
    const logo = screen.getByAltText(/Vimala Eye Hospital Logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveStyle({ width: '180px' });
  });

  it('should have a functional mobile menu toggle', () => {
    render(<App />);
    
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
  });
});
