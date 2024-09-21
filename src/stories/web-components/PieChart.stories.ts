import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from 'SRC/components/ui/PieChart';
import tailwindConfig from 'Tailwind-config';
import resolveConfig from 'tailwindcss/resolveConfig';

const { theme } = resolveConfig(tailwindConfig);

const meta: Meta<typeof PieChart> = {
  title: 'web-components/PieChart',
  component: PieChart,
  argTypes: {
    containerHeight: {
      control: 'text',
    },
    containerWidth: {
      control: 'text',
    },
    pieTitle: {
      control: 'text',
    },
    pieSubtitle: {
      control: 'text',
    },
    pieChartData: {
      control: 'object',
    },
  },
  args: {
    pieChartData: [
      { name: 'nameA', value: 275, fill: theme.colors.primary[800] },
      { name: 'nameB', value: 200, fill: theme.colors.primary[700] },
      { name: 'nameC', value: 287, fill: theme.colors.primary[600] },
      { name: 'nameD', value: 173, fill: theme.colors.primary[500] },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PieChartWithTitle: Story = {
  args: {
    pieTitle: 'Title',
    pieSubtitle: 'Subtitle',
  },
};
