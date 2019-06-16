import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import ExpandableSection from '../components/expandable-section/expandable-section';
import Twitter from '../components/twitter/twitter';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ExpandableSection
      title="About Us"
      initialText="For entry level developers"
      expandedText=", people interested in starting a new career in tech, 
      and anyone wanting to encourage and help newer developers. 
      Join us to hear relevant speakers, enjoy drinks and network with your fellow developers, 
      and make new connections! We look forward to meeting you."
    />
    <ExpandableSection
      //placeholder text for- next step will be to pull in the actual text of our CoC via a plugin
      title="Code of Conduct"
      initialText="We have a code of conduct "
      expandedText=", so please follow it and let us know if it has been violated."
    />
    <div style={{ display: 'flex' }}>
      <Twitter />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
