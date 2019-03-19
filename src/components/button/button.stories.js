import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Button from './button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button
      onClick={action('I was clicked')}
      buttonText={text('Button Text', 'Sample Button')}
      disabled={boolean('Disabled', false)}
    />
  ));
