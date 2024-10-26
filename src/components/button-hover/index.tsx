import Link from 'next/link';
import styles from './button-hover.module.css';

type ButtonHoverProps = {
  children: React.ReactNode;
};

export default function ButtonHover({ children }: ButtonHoverProps) {
  return (
    <Link href="#" className={styles.hover}>
      {children}
    </Link>
  );
}
