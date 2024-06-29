import { describe, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { expect } from '@storybook/test';

describe('Button component', () => {
  const buttonText = 'Click me';
  test('should display correct text', () => {
    render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  test('should handle click event', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>{buttonText}</Button>);

    const button = screen.getByText('Click me');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
