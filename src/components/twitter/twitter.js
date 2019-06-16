import React from 'react';
import {
  TwitterTimelineEmbed,
  // TwitterShareButton,
  TwitterFollowButton,
  // TwitterHashtagButton,
  // TwitterMentionButton,
  // TwitterTweetEmbed,
  // TwitterMomentShare,
  // TwitterDMButton,
  // TwitterVideoEmbed,
  // TwitterOnAirButton,
} from 'react-twitter-embed';

import './styles.css';

const Twitter = () => (
  <div className="twitter__base">
    <a
      className="twitter-timeline"
      href="https://twitter.com/pdx_jr_devs?ref_src=twsrc%5Etfw"
    >
      Tweets by @pdx_jr_devs
    </a>{' '}
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="pdx_jr_devs"
      options={{ maxWidth: 50 }}
    />
    <TwitterFollowButton screenName="pdx_jr_devs" />
  </div>
);

export default Twitter;
