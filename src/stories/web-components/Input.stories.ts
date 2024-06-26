import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'SRC/components/ui/Input';

const meta: Meta<typeof Input> = {
  title: 'web-components/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'radio',
      options: ['text', 'password', 'number'],
      description: 'Can change Input type.',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    maxLength: {
      control: 'number',
    },
    value: {
      control: 'text',
    },
  },
  args: {
    placeholder: 'placeholder',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Password: Story = {
  args: {
    type: 'password',
  },
};

export const File: Story = {
  args: {
    type: 'file',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
