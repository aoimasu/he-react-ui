// @flow
import React from 'react';
import Button from '../';
import Icon from '../../../Icon';

export default {
  component: Button,
  props: {
    iconLeft: <Icon name="Settings" />,
  },
  children: 'Button',
  simulateSubmission: true,
};
