import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary-500 text-white hover:bg-primary-500/90',
        error: 'bg-error-300 text-white hover:bg-primary-500/90',
        text: 'text-primary-500 hover:bg-primary-100',
        outline:
          '!border !border-primary-500 hover:bg-primary-500 text-primary-500 bg-white hover:bg-slate-100 hover:text-primary-500',
        link: 'text-blue-400 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export default buttonVariants;
