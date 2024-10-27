// components/LoginForm.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ConfigProvider, message } from 'antd';
import LoginForm from './LoginForm';
import customTheme from '../theme';

export default {
  title: 'Example/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => (
  <ConfigProvider theme={customTheme}>
    <LoginForm {...args} />
  </ConfigProvider>
);

export const Default = Template.bind({});
Default.args = {
  onLogin: (values: { username: string; password: string }) => {
    message.success(`Login successful for user: ${values.username}`);
  }
};

export const AdminLogin = Template.bind({});
AdminLogin.args = {
  onLogin: (values) => {
    message.success(`Admin login successful for user: ${values.username}`);
  },
};
