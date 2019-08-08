import React from 'react';
import { render } from 'react-testing-library';
import { StaticQuery } from 'gatsby';

import Twitter from '../twitter/twitter';

const title = 'Mock Gatsby page';
const mockSiteData = {
  site: {
    siteMetadata: {
      title,
    },
  },
};

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render: renderData }) =>
    renderData(mockSiteData),
  );
});

describe('<Twitter />', () => {
  it('renders correctly', () => {
    const demo = 'Jr Dev Twitter Feed';
    const { getByText } = render(
      <Twitter>
        <h3>{demo}</h3>
      </Twitter>,
    );

    getByText(demo);
    const child = getByText(demo);
    expect(child.tagName).toBe('H3');
  });
});
