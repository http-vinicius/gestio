'use client';

import { useState } from 'react';

import routes from '@/config/routes';

import { Button } from '@/components/ui/button';

import Sidebar from '../sidebar';
import SidebarItem from '../sidebar-item';

import styles from './sidebar-template.module.css';
import ButtonHover from '../button-hover';

type SidebarTemplateProps = {
  children: React.ReactNode;
};

export default function SidebarTemplate({ children }: SidebarTemplateProps) {
  const [open, setOpen] = useState(false);

  const containerMargin = open ? 'lg:ml-60' : 'lg:ml-20';

  return (
    <div className="flex flex-row min-h-screen pt-3 pl-8">
      <Sidebar isOpen={open} setOpen={setOpen}>
        {!open
          ? routes.map((item) => (
              <ButtonHover>
                <item.icon className="size-8" />
              </ButtonHover>
            ))
          : routes.map((item) => (
              <SidebarItem icon={item.icon} nome={item.nome} key={item.id} />
            ))}
      </Sidebar>
      <main
        className={`transition-all duration-300 grow flex flex-col ${containerMargin} overflow-auto relative`}
      >
        {children}
      </main>
    </div>
  );
}
