import {
  Select as ShadSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'SRC/components/ui/Select/ShadSelect';

interface ISelectOptionItem {
  id: string;
  value: string;
  optionText: string;
  disabled?: boolean;
}

interface ISelectProps {
  className?: string;
  placeholder?: string;
  selectOption: ISelectOptionItem[];
  value?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => any;
}

const Select = ({
  className,
  placeholder,
  value,
  selectOption,
  disabled,
  onValueChange,
}: ISelectProps) => {
  return (
    <ShadSelect value={value} disabled={disabled} onValueChange={onValueChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {selectOption.map((option) => (
          <SelectItem key={option.id} value={option.value}>
            {option.optionText}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadSelect>
  );
};

export { Select, ISelectOptionItem };
