import React from 'react';
import { storiesOf } from '@storybook/react';

import Volunteer from "./volunteer";

storiesOf('Volunteer', module)
    .add('default', () => {
        return <Volunteer />
    });