import type { Meta, StoryObj } from '@storybook/react';
import Select from 'SRC/components/ui/Select';

const meta: Meta<typeof Select> = {
  title: 'web-components/Select',
  component: Select,
  argTypes: {
    placeHolder: {
      control: 'text',
    },
    selectOption: {
      control: 'object',
    },
    value: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    placeHolder: 'Select an option',
    selectOption: [
      {
        id: '1',
        value: 'option 1',
        optionText: 'option 1',
      },
      {
        id: '2',
        value: 'option 2',
        optionText: 'option 2',
      },
      {
        id: '3',
        value: 'option 3',
        optionText: 'option 3',
      },
    ],
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  args: {
    value: 'option 3',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
