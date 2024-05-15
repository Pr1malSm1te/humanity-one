import SideNav from '@/app/ui/topnavbar/topnav';
import Link from 'next/link';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="w-screen flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grid grid-cols-2 gap-6 p-2">
        <Link href="/equipment/weapons"   className="text-white text-2xl p-10 text-center bg-slate-900 mt-4 rounded-lg hover:bg-slate-700 hover:text-blue-600">Weapons</Link>
        <Link href="/equipment/augmentations" className="text-white text-2xl p-10 text-center bg-slate-900 mt-4 rounded-lg hover:bg-slate-700 hover:text-blue-600">Augmentations</Link>
      </div>
      <div className="flex-grow p-2 pt-4 pb-0 md:overflow-y-auto">{children}</div>
    </main>
  );
}