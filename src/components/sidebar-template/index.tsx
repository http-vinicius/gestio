'use client';

import { useState } from 'react';
import Sidebar from '../sidebar';

type SidebarTemplateProps = {
  children: React.ReactNode;
};

export default function SidebarTemplate({ children }: SidebarTemplateProps) {
  const [open, setOpen] = useState(false);

  const containerMargin = open ? 'lg:ml-60' : 'lg:ml-20';

  return (
    <div className="flex flex-row min-h-screen p-5">
      <Sidebar isOpen={open} setOpen={setOpen}>
        <h6>teste</h6>
      </Sidebar>
      <main
        className={`transition-all duration-300 grow flex flex-col ${containerMargin} overflow-auto relative`}
      >
        {children}
      </main>
    </div>
  );
}
