import React from 'react';
import { TwitterFollowButton } from 'react-twitter-embed';

import './styles.css';

const Twitter = () => (
  <>
    <div className="twitter__base">
      <h3 className="twitter-title">Jr Dev Twitter Feed</h3>
      <a
        className="twitter-timeline"
        href="https://twitter.com/pdx_jr_devs"
        data-height="345"
        data-min-width="10px !important"
      >
        {''}
      </a>

      <TwitterFollowButton screenName="pdx_jr_devs" />
    </div>
  </>
);

export default Twitter;
