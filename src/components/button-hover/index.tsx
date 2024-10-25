import styles from './button-hover.module.css'

type ButtonHoverProps = {
  children: React.ReactNode;
};

export default function ButtonHover({ children }: ButtonHoverProps) {
  return (
    <a href="#" className={styles.hover}>
      {children}
    </a>
  );
}
