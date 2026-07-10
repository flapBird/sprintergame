import { siteConfig } from "@/lib/site.config";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto mt-6 py-8 sm:py-10 bg-[#FFFBF7] rounded-xl px-4 sm:px-6">
      <div className="flex justify-center gap-8">
        {/* Main content */}
        <div className="flex-1 max-w-[800px] min-w-0">{children}</div>
      </div>
    </div>
  );
}
