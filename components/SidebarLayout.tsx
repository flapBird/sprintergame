interface SidebarLayoutProps {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="mx-auto max-w-5xl bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="flex justify-center">
        <div className="min-w-0 max-w-[800px] flex-1">{children}</div>
      </div>
    </div>
  );
}
