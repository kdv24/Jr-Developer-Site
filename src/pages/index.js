import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import AboutUs from '../components/aboutUs/aboutUs';
import Volunteer from "../components/volunteer/volunteer";


const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <AboutUs />
    <Volunteer />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
