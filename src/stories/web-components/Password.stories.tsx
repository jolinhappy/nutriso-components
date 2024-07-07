import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from 'SRC/components/ui/PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'web-components/PasswordInput',
  component: PasswordInput,
  argTypes: {
    placeholder: {
      control: 'text',
    },
  },
  args: {
    placeholder: 'placeholder',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
