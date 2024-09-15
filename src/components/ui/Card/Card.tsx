import {
  Card as ShadCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from 'SRC/components/ui/Card/ShadCard';
import { cn } from 'SRC/lib/utils';

interface ICardProps {
  className?: string;
  title?: string;
  description?: string;
  cardContent: React.ReactNode;
  footerContent?: React.ReactNode;
}

const Card = ({
  className,
  title,
  description,
  cardContent,
  footerContent,
}: ICardProps) => {
  return (
    <ShadCard className={cn('w-[380px]', className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="grid gap-4">{cardContent}</CardContent>
      {footerContent && <CardFooter>{footerContent}</CardFooter>}
    </ShadCard>
  );
};

export { Card };
