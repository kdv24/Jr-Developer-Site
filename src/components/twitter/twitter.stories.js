import React from 'react';
import { storiesOf } from '@storybook/react';

import Twitter from './twitter';

storiesOf('Twitter', module).add('default', () => {
  return <Twitter />;
});
