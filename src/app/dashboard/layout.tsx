'use client';

import SidebarTemplate from '@/components/sidebar-template';
import ContextWrapper from '@/Context/ContextWrapper';

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <ContextWrapper>
      <SidebarTemplate>{children}</SidebarTemplate>
    </ContextWrapper>
  );
}
