import { cva } from 'class-variance-authority';

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden text-gray-700 rounded-md border border-primary-500 bg-primary-100 dark:bg-slate-950 dark:text-slate-50 p-4 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-slate-800',
  {
    variants: {
      variant: {
        info: 'border-primary-500 bg-primary-100 dark:bg-slate-950 dark:text-slate-50',
        error:
          'border-error-400 bg-error-100 dark:border-red-900 dark:bg-red-900 dark:text-slate-50',
        warning:
          'border-orange-400 bg-orange-100 dark:bg-slate-950 dark:text-slate-50',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
);

export default toastVariants;
