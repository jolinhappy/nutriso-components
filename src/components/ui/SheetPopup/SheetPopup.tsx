import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from 'SRC/components/ui/SheetPopup/ShadSheet';

interface SheetPopupProps {
  triggerPoint: React.ReactNode;
  title?: string;
  description: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
}

const SheetPopup = ({
  triggerPoint,
  title,
  description,
  side = 'right',
}: SheetPopupProps) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>{triggerPoint}</SheetTrigger>
        <SheetContent side={side}>
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { SheetPopup };
