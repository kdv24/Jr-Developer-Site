import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import Seo from '../components/seo';
import Resources from '../components/resources';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>
      Hi people! {''}
      <span role="img" aria-label="party">
        🎉
      </span>
    </h1>
    <p>Thanks for helping with our site!</p>
    {/* <p>Let&#39;s build something great!</p> */}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div style={{ marginBottom: `1.45rem` }}>
      <Resources />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
