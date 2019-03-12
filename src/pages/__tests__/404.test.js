import React from 'react';
import { render } from 'react-testing-library';
import { StaticQuery, useStaticQuery } from 'gatsby';

import NotFoundPage from '../404';

const mockSiteData = {
  site: {
    siteMetadata: {
      title: 'Sample page',
    },
  },
};

const mockSeo = {
  site: {
    siteMetadata: {
      title: 'Sample page',
      description: `Oh the Places You'll Go`,
      author: 'Dr Seuess',
    },
  },
};

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render: renderData }) =>
    renderData(mockSiteData),
  );
  useStaticQuery.mockImplementation(() => mockSeo);
});

describe('<NotFoundPage />', () => {
  it('renders', () => {
    const { debug } = render(<NotFoundPage />);
    debug();
  });
});
