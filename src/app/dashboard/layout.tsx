import SidebarTemplate from '@/components/sidebar-template';

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarTemplate>{children}</SidebarTemplate>
    </>
  );
}
