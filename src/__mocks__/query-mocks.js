import { StaticQuery, useStaticQuery } from 'gatsby';

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

const mockPageQueries = () => {
  StaticQuery.mockImplementationOnce(({ render: renderData }) =>
    renderData(mockSiteData),
  );
  useStaticQuery.mockImplementationOnce(() => mockSeo);
};

export default mockPageQueries;
