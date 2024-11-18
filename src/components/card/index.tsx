import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as CardUI,
} from '@/components/ui/card';

type StylesProps = {
  stylesTitle?: string;
  stylesDescription?: string;
  stylesContent?: string;
  stylesFooter?: string;
};

type CardProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  styles?: StylesProps;
};

export default function Card({
  title,
  description,
  children,
  footer,
  styles,
}: CardProps) {
  return (
    <CardUI>
      <CardHeader>
        <CardTitle className={styles?.stylesTitle}>{title}</CardTitle>
        <CardDescription className={styles?.stylesDescription}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className={styles?.stylesContent}>{children}</CardContent>
      <CardFooter className={styles?.stylesFooter}>{footer}</CardFooter>
    </CardUI>
  );
}
