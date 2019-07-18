import React from 'react';
import { storiesOf } from '@storybook/react';

import AboutUs from "./aboutUs";

storiesOf('AboutUs', module)
    .add('default', () => {
        return <AboutUs />
    });