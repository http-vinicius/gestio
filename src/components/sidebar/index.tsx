'use client';

import React, { useCallback } from 'react';

import { ChevronRight } from 'lucide-react';
import FlexBox from '../flexbox';
import { Button } from '../ui/button';
import styles from './sidebar.module.css';

type SidebarProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  setOpen: (state: boolean) => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setOpen,
  children,
}: SidebarProps) => {
  const handleOpen = useCallback(() => setOpen(!isOpen), [setOpen, isOpen]);

  const containerSize = isOpen ? 'w-60' : 'w-20';
  const justifyItens = isOpen ? 'items-start' : 'items-center';
  const buttonRotation = isOpen ? 'rotate-180' : 'rotate-0';

  return (
    <nav
      className={`${styles.drawer} ${containerSize} ${styles.navItemBorder}`}
    >
      <Button
        onClick={handleOpen}
        className={`${styles.drawerButon} ${buttonRotation}`}
        size="sm"
      >
        <ChevronRight className={styles.iconButton} />
      </Button>
      <FlexBox
        direction="flex-col"
        alignItems={justifyItens}
        spacing={2}
        px={2}
        py={1}
      >
        {children}
      </FlexBox>
    </nav>
  );
};

export default Sidebar;
