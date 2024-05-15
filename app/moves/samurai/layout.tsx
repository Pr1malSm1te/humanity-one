import SideNav from '@/app/ui/topnavbar/topnav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex-grow">{children}</div>
    </div>
  );
}