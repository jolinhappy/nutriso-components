import type { Meta, StoryObj } from '@storybook/react';
import { SheetPopup } from 'SRC/components/ui/SheetPopup';

const meta: Meta<typeof SheetPopup> = {
  title: 'web-components/SheetPopup',
  component: SheetPopup,
  argTypes: {
    triggerPoint: {
      control: 'object',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    side: {
      control: 'radio',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  args: {
    triggerPoint: 'open',
    title: 'title',
    description: 'description',
    side: 'right',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLeftSide: Story = {
  args: {
    side: 'left',
  },
};
