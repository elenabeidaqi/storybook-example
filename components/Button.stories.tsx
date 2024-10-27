// components/Button.stories.tsx
import React from 'react';
import Button from './Button';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  size: 'middle',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'default',
  size: 'middle',
  children: 'Secondary Button',
};

export const Large = Template.bind({});
Large.args = {
  type: 'primary',
  size: 'large',
  children: 'Large Button',
};
