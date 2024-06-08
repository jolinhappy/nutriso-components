import type { Meta, StoryObj } from '@storybook/react';
import Radio from 'SRC/components/ui/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Radio',
  component: Radio,
  argTypes: {
    className: {
      control: 'text',
    },
    defaultValue: {
      control: 'text',
    },
    radioGroupList: {
      control: 'object',
    },
  },
  args: {
    radioGroupList: [
      {
        id: 'option-one',
        value: 'option-1',
        labelText: 'Option 1',
        disable: true,
      },
      {
        id: 'option-two',
        value: 'option-2',
        labelText: 'Option 2',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
