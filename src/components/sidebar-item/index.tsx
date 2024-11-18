import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

import Link from 'next/link';

import styles from './sidebar-item.module.css';

type SidebarItemProps = {
  href: string;
  nome: string;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string;
      titleId?: string;
    } & RefAttributes<SVGSVGElement>
  >;
};

export default function SidebarItem({
  href,
  nome,
  icon: Icon,
}: SidebarItemProps) {
  return (
    <Link href={href} color="primary" className={styles.navItem}>
      <Icon className="size-6" />
      <small className={styles.nome}>{nome}</small>
    </Link>
  );
}
