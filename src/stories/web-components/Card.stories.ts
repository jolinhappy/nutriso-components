import type { Meta, StoryObj } from '@storybook/react';
import { Card } from 'SRC/components/ui/Card';

const meta: Meta<typeof Card> = {
  title: 'web-components/Card',
  component: Card,
  argTypes: {
    title: {
      control: 'text',
      description: 'Can set Card text.',
    },
    description: {
      control: 'text',
      description: 'Can set Card description.',
    },
    cardContent: {
      control: 'text',
      description: 'Can set Card content.',
    },
  },
  args: {
    title: 'title',
    description: 'description text',
    cardContent: 'content ....',
    footerContent: 'footer ....',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
