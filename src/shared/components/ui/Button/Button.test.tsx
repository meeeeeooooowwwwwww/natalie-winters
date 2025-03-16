import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText('Secondary');
    expect(button).toHaveClass('secondary');
  });

  it('applies size classes correctly', () => {
    render(<Button size="large">Large Button</Button>);
    const button = screen.getByText('Large Button');
    expect(button).toHaveClass('large');
  });
}); 