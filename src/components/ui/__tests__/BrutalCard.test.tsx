import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrutalCard } from '../BrutalCard';

describe('BrutalCard', () => {
  it('renders children correctly', () => {
    render(<BrutalCard>Test Content</BrutalCard>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<BrutalCard className="custom-class">Content</BrutalCard>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies neobrutalist styling', () => {
    const { container } = render(<BrutalCard>Content</BrutalCard>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveStyle({
      borderColor: '#0A0A0A',
      borderWidth: '2px',
    });
  });
});
