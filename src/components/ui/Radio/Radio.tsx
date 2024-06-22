import { RadioGroup, RadioGroupItem } from 'SRC/components/ui/Radio/RadioGroup';

interface IRadioItem {
  id: string;
  value: string;
  labelText: string;
  disable?: boolean;
}

interface IRadioProps {
  className?: string;
  defaultValue?: string;
  radioGroupList?: IRadioItem[];
}

const Radio = ({ className, defaultValue, radioGroupList }: IRadioProps) => {
  return (
    <RadioGroup className={className} defaultValue={defaultValue}>
      {radioGroupList &&
        radioGroupList.map((radioItem: IRadioItem) => (
          <div key={radioItem.id} className="flex items-center space-x-2">
            <RadioGroupItem
              value={radioItem.value}
              id={radioItem.id}
              disabled={radioItem.disable}
              className="peer"
            />
            <label
              className="cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor={radioItem.id}
            >
              {radioItem.labelText}
            </label>
          </div>
        ))}
    </RadioGroup>
  );
};

export { Radio, IRadioItem };
