import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import AboutUs from '../components/aboutUs/aboutUs';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <AboutUs />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
