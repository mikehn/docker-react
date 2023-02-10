import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter component', () => {
  it('should display the count and increment the count when the button is clicked', () => {
    const { getByText } = render(<Counter />);

    // Verify that the count is displayed and starts at 0
    expect(document.querySelector('.counter span').textContent).toBe("0");

    // Find the button and click it
    const button = document.querySelector('.counter button');
    fireEvent.click(button);

    // Verify that the count has been incremented to 1
    expect(document.querySelector('.counter span').textContent).toBe("1");

  });
});
