interface IDropdownItem {
  value: string;
  optionText: string;
}

interface IDropdownProps {
  children?: React.ReactNode;
  value: string;
  dropdownList: IDropdownItem[];
  onValueChange: (value: string) => void;
}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from 'SRC/components/ui/Dropdown/ShadDropdown';

const Dropdown = ({
  children,
  value,
  dropdownList,
  onValueChange,
}: IDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto">
        <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
          {dropdownList.map(({ value, optionText }) => (
            <DropdownMenuRadioItem id={value} value={value}>
              {optionText}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { Dropdown, IDropdownItem };
