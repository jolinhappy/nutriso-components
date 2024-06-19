import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from 'SRC/components/ui/Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'web-components/Textarea',
  component: Textarea,
  argTypes: {
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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
