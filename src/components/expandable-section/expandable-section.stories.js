import React from 'react';
import { storiesOf } from '@storybook/react';

import ExpandableSection from "./expandable-section";

storiesOf('ExpandableSection', module)
  .add('default', () => {
      return <ExpandableSection />
  });