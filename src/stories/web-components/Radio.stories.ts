import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from 'SRC/components/ui/Radio';

const meta: Meta<typeof Radio> = {
  title: 'web-components/Radio',
  component: Radio,
  argTypes: {
    className: {
      control: 'text',
    },
    defaultValue: {
      control: 'text',
      description: 'Can set default value.',
    },
    radioGroupList: {
      control: 'object',
      description: 'Can set radio item list.',
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
