import React from 'react';
import { render } from 'react-testing-library';
import { StaticQuery } from 'gatsby';

import mockPageQueries from '../../__mocks__/query-mocks';

import IndexPage from '../index';

beforeEach(() => {
  mockPageQueries();

  StaticQuery.mockImplementationOnce(({ render: renderData }) =>
    renderData({
      placeholderImage: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            sizes: '100 200 300',
            src: 'dummy src data',
            srcSet: 'useful for performance images',
          },
        },
      },
    }),
  );
});

describe('<IndexPage />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<IndexPage />);

    const aboutUs = getByText(/About Us/i);
    expect(aboutUs.tagName).toBe('H1');

    const codeOfConduct = getByText(/Code of Conduct/i);
    expect(codeOfConduct.tagName).toBe('H1');

    const link = getByText(/go to page 2/i);
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/page-2/');
  });
});
