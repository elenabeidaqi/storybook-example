// components/UserCard.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import UserCard from './UserCard';

export default {
  title: 'Example/UserCard',
  component: UserCard,
  argTypes: {
    name: { control: 'text' },
    description: { control: 'text' },
    role: { control: 'text' },
  },
  tags: ['autodocs'],
} as Meta<typeof UserCard>;

const Template: StoryFn<typeof UserCard> = (args) => <UserCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  description: 'A passionate developer',
  role: 'User',
};

export const Manager = Template.bind({});
Manager.args = {
  name: 'Jane Smith',
  description: 'Lead of the development team',
  role: 'Manager',
};
