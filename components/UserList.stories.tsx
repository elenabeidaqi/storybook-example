// components/UserList.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import UserList from './UserList';

export default {
  title: 'Example/UserList',
  component: UserList,
  argTypes: {
    compact: { control: 'boolean' },
  },
  tags: ['autodocs'],
} as Meta<typeof UserList>;

const usersData = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Smith', email: 'jane@example.com' },
  { name: 'Alice Brown', email: 'alice@example.com' },
  { name: 'Bob White', email: 'bob@example.com' },
  { name: 'Charlie Black', email: 'charlie@example.com' },
  { name: 'David Green', email: 'david@example.com' },
];

const Template: StoryFn<typeof UserList> = (args) => <UserList {...args} />;

export const Default = Template.bind({});
Default.args = {
  users: usersData,
};

export const Compact = Template.bind({});
Compact.args = {
  users: usersData,
  compact: true,
};
