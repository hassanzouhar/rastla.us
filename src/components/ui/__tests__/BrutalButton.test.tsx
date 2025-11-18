import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrutalButton } from '../BrutalButton';
import { C } from '@/lib/constants';

describe('BrutalButton', () => {
  it('renders children correctly', () => {
    render(<BrutalButton>Click Me</BrutalButton>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders as an anchor tag with correct href', () => {
    render(<BrutalButton href="#test">Click Me</BrutalButton>);
    const button = screen.getByText('Click Me');
    expect(button.tagName).toBe('A');
    expect(button).toHaveAttribute('href', '#test');
  });

  it('applies default neon color', () => {
    render(<BrutalButton>Click Me</BrutalButton>);
    const button = screen.getByText('Click Me');
    expect(button).toHaveStyle({ background: C.neon });
  });

  it('applies custom color', () => {
    render(<BrutalButton color={C.blue}>Click Me</BrutalButton>);
    const button = screen.getByText('Click Me');
    expect(button).toHaveStyle({ background: C.blue });
  });

  it('has focus styles for accessibility', () => {
    render(<BrutalButton>Click Me</BrutalButton>);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('focus:outline-none', 'focus:ring-4');
  });
});
