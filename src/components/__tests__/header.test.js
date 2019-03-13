import React from 'react';
import { render } from 'react-testing-library';

import Header from '../header';

describe('<Header />', () => {
  it('renders with a headline', () => {
    const title = 'Gatsby Demo';
    const { getByText } = render(<Header siteTitle={title} />);

    getByText(title);
  });
});
