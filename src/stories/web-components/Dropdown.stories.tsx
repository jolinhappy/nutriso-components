import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from 'SRC/components/ui/Dropdown';
import { useState } from 'react';

const meta: Meta<typeof Dropdown> = {
  title: 'web-components/Dropdown',
  component: Dropdown,
  argTypes: {
    children: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    dropdownList: {
      control: 'object',
    },
    onValueChange: {
      action: 'changed',
    },
  },
  args: {
    children: 'open',
    dropdownList: [
      {
        value: 'option-1',
        optionText: 'Option 1',
      },
      {
        value: 'option-2',
        optionText: 'Option 2',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>('option-1');
    return (
      <Dropdown {...args} value={value} onValueChange={setValue}>
        open modal
      </Dropdown>
    );
  },
};
