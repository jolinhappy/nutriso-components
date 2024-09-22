import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from 'SRC/components/ui/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'web-components/Tabs',
  component: Tabs,
  argTypes: {
    defaultValue: {
      control: 'text',
    },
    tabList: {
      control: 'object',
    },
  },
  args: {
    defaultValue: 'tab 1',
    tabList: [
      {
        labelValue: 'tab 1',
        value: <b>tab 1 content</b>,
      },
      {
        labelValue: 'tab 2',
        value: 'tab 2 content',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
