'use client';

import styles from './typography.module.css';

export type VariantTypes = 'subtitle1' | 'subtitle2' | 'body1' | 'body2';

type TypographyProps = {
  variant?: VariantTypes;
  className?: string;
  children: string;
};

export default function Typography({
  variant = 'body1',
  className,
  children,
}: TypographyProps) {
  const fontBody1 = variant === 'body1' ? 'text-base' : '';

  const fontBody2 = variant === 'body2' ? 'text-sm' : '';

  const fontSubtitle1 =
    variant === 'subtitle1' ? `text-3xl ${styles.fonteFormatada}` : '';

  const fontSubtitle2 = variant === 'subtitle2' ? `text-2xl` : '';

  return (
    <h3
      className={`${fontSubtitle1} ${fontSubtitle2} ${fontBody1} ${fontBody2} ${className}`}
    >
      {children}
    </h3>
  );
}
