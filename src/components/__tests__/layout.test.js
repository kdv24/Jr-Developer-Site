import React from 'react';
import { render } from 'react-testing-library';
import { StaticQuery } from 'gatsby';

import Layout from '../layout';

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

describe('<Layout />', () => {
  it('renders correctly', () => {
    const demo = 'Here is a sample child';
    const copyrightYear = new RegExp(new Date().getFullYear());
    const { getByText } = render(
      <Layout>
        <p>{demo}</p>
      </Layout>,
    );

    getByText(title);
    const child = getByText(demo);
    expect(child.tagName).toBe('P');
    getByText(copyrightYear);
  });
});
