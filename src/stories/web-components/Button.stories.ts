import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Button } from 'SRC/components/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'web-components/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      description: 'Can set Button text.',
    },
    size: {
      control: 'radio',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Can change Button size.',
    },
    variant: {
      control: 'radio',
      options: ['default', 'text', 'outline', 'error', 'link'],
      description: 'Can change Button type.',
    },
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};
