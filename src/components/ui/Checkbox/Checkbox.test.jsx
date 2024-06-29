import { describe, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';
import { expect } from '@storybook/test';

describe('Checkbox component', () => {
  const labelText = 'label text';
  test('should display correct text', () => {
    render(<Checkbox labelText={labelText} />);
    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  // test('should handle click event', () => {
  //   const onClick = vi.fn();
  //   render(<Button onClick={onClick}>{buttonText}</Button>);

  //   const button = screen.getByText('Click me');
  //   fireEvent.click(button);

  //   expect(onClick).toHaveBeenCalled();
  // });
});
