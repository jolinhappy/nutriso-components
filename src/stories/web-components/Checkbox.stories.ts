import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from 'SRC/components/ui/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'web-components/Checkbox',
  component: Checkbox,
  argTypes: {
    labelText: {
      control: 'text',
      description: 'Set Checkbox label text.',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    labelText: 'label',
    id: 'sample-checkbox',
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
