import React from 'react';
import { render } from 'react-testing-library';
import mockPageQueries from '../../__mocks__/query-mocks';

import NotFoundPage from '../404';

beforeEach(mockPageQueries);

describe('<NotFoundPage />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<NotFoundPage />);

    const header = getByText(/not found/i);
    expect(header.tagName).toBe('H1');
  });
});
