import React from 'react';
import { TwitterFollowButton, TwitterTimelineEmbed } from 'react-twitter-embed';

import './styles.css';

const Twitter = () => (
  <div className="twitter__base">
    <h3 className="twitter-title">Jr Dev Twitter Feed</h3>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="pdx_jr_devs"
      options={{ height: 400 }}
    />
    <TwitterFollowButton screenName="pdx_jr_devs" />
  </div>
);

export default Twitter;
