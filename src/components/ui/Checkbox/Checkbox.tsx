import CnCheckbox from 'SRC/components/ui/Checkbox/CnCheckbox';
import { cn } from 'SRC/lib/utils';

interface ICheckboxProps {
  className?: string;
  labelText?: string;
  disabled?: boolean;
  id?: string;
}

const CheckboxWithLabel = ({
  className,
  labelText,
  id,
  disabled,
}: ICheckboxProps) => {
  return (
    <div className={cn('items-top flex space-x-2', className)}>
      <CnCheckbox id={id} disabled={disabled} className="peer" />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {labelText}
      </label>
    </div>
  );
};

export { CheckboxWithLabel };
