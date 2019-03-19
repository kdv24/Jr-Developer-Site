import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import Button from './button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const btnText = 'Click me';
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button buttonText={btnText} onClick={mockOnClick} />,
    );

    const btn = getByText(btnText);
    fireEvent.click(btn);
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
