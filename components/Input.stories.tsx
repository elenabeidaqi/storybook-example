// components/Input.stories.tsx
import React, { useState } from 'react';
import Input from './Input';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => {
  const [value, setValue] = useState('');

  return <Input placeholder={''} {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled Input',
  value: 'This is disabled',
  disabled: true,
};
