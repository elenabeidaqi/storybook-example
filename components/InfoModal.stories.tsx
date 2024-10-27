// components/InfoModal.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InfoModal from './InfoModal';

export default {
  title: 'Example/InfoModal',
  component: InfoModal,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
  tags: ['autodocs'],
} as Meta<typeof InfoModal>;

const Template: StoryFn<typeof InfoModal> = (args) => <InfoModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Information',
  content: 'This is some content inside the modal',
};

export const Alert = Template.bind({});
Alert.args = {
  title: 'Important Alert',
  content: 'Please pay attention to this urgent information.',
};
