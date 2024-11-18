import Link from 'next/link';
import styles from './button-hover.module.css';

type ButtonHoverProps = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonHover({ href, children }: ButtonHoverProps) {
  return (
    <Link href={href} className={styles.hover}>
      {children}
    </Link>
  );
}
