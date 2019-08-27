import React from 'react';
import { TwitterFollowButton, TwitterTimelineEmbed } from 'react-twitter-embed';

import styles from './twitter.module.css';

const Twitter = () => (
  <div className={styles.twitterBase}>
    <h3 className={styles.twitterTitle}>Jr Dev Twitter Feed</h3>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="pdx_jr_devs"
      options={{ height: 400 }}
    />
    <TwitterFollowButton screenName="pdx_jr_devs" />
  </div>
);

export default Twitter;
