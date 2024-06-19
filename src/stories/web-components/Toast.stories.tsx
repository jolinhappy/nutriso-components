import type { Meta, StoryObj } from '@storybook/react';
import { Toaster, useToast } from 'SRC/components/ui/Toast';
import { Button } from 'SRC/components/ui/Button';

const meta: Meta<typeof Toaster> = {
  title: 'web-components/Toast',
  component: Toaster,
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    action: {
      control: 'object',
    },
    variant: {
      control: 'radio',
      options: ['primary', 'warning', 'error'],
    },
    isShowClose: {
      control: 'boolean',
    },
  },
  args: {
    isShowClose: false,
    title: 'title',
    description: 'description',
    variant: 'info',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'title',
    description: 'description',
  },
  render: (args) => {
    const { toast } = useToast();
    const { title, description, ...otherArgs } = args;
    return (
      <>
        <Button
          className="mr-2"
          onClick={() => {
            toast({
              title,
              description,
              ...otherArgs,
            });
          }}
        >
          open modal
        </Button>
        <Toaster />
      </>
    );
  },
};

export const WithCloseButton: Story = {
  args: {
    title: 'title',
    description: 'description',
    isShowClose: true,
  },
  render: (args) => {
    const { toast } = useToast();
    const { title, description, variant, ...otherArgs } = args;
    return (
      <>
        <Button
          className="mr-2"
          onClick={() => {
            toast({
              title,
              description,
              variant,
              ...otherArgs,
            });
          }}
        >
          open modal
        </Button>
        <Toaster />
      </>
    );
  },
};
