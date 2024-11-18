'use client';

import { useState } from 'react';

import routes from '@/config/routes';

import Sidebar from '../sidebar';
import SidebarItem from '../sidebar-item';

import ButtonHover from '../button-hover';

type SidebarTemplateProps = {
  children: React.ReactNode;
};

export default function SidebarTemplate({ children }: SidebarTemplateProps) {
  const [open, setOpen] = useState(false);

  const containerMargin = open ? 'lg:ml-44' : 'lg:ml-20';

  return (
    <div className="flex flex-row min-h-screen lg:pt-6 lg:pl-12 lg:pr-8 sm: p-2">
      <Sidebar isOpen={open} setOpen={setOpen}>
        {!open
          ? routes.map((item) => (
              <ButtonHover key={item.id} href={item.url}>
                <item.icon className="size-6" />
              </ButtonHover>
            ))
          : routes.map((item) => (
              <SidebarItem
                icon={item.icon}
                nome={item.nome}
                key={item.id}
                href={item.url}
              />
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
