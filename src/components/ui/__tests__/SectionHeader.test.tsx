import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionHeader } from '../SectionHeader';

describe('SectionHeader', () => {
  it('renders title correctly', () => {
    render(<SectionHeader title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders kicker when provided', () => {
    render(<SectionHeader title="Title" kicker="Kicker Text" />);
    expect(screen.getByText('Kicker Text')).toBeInTheDocument();
  });

  it('does not render kicker when not provided', () => {
    const { container } = render(<SectionHeader title="Title" />);
    expect(container.textContent).not.toContain('Kicker');
  });

  it('renders badge when provided', () => {
    render(<SectionHeader title="Title" badge="Badge Text" />);
    expect(screen.getByText('Badge Text')).toBeInTheDocument();
  });

  it('does not render badge when not provided', () => {
    const { container } = render(<SectionHeader title="Title" />);
    const badges = container.querySelectorAll('.rounded-lg');
    expect(badges).toHaveLength(0);
  });
});
