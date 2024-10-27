import { ConfigProvider } from 'antd';
import customTheme from '../theme';
import type { Preview } from '@storybook/react';
import React from 'react';

const withAntdTheme = (Story) => (
  <ConfigProvider theme={customTheme}>
    <Story />
  </ConfigProvider>
);


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withAntdTheme],
  tags: ['autodocs'],
};

export default preview;
