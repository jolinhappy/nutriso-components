import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from 'SRC/components/ui/Toast/Toast';
import { useToast } from 'SRC/components/ui/Toast/useToast';

const Toaster = () => {
  const { toasts } = useToast();
  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        isShowClose,
        ...props
      }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex items-center justify-between w-full">
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
              {action}
              {isShowClose && <ToastClose />}
            </div>
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
};

export default Toaster;
