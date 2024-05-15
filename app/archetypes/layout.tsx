import SideNav from '@/app/ui/topnavbar/topnav';
import Link from 'next/link';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="">
      <div className="w-screen flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grid grid-cols-4 gap-6 p-2 pb-4">
        <Link href="/archetypes/samurai"   className="text-white text-2xl p-10 text-center bg-slate-900 mt-4 rounded-lg hover:bg-slate-700 hover:text-blue-600">Street Samurai</Link>
        <Link href="/archetypes/liqudator" className="text-white text-2xl p-10 text-center bg-slate-900 mt-4 rounded-lg hover:bg-slate-700 hover:text-blue-600">Liqudator</Link>
        <Link href="/archetypes/hacker"    className="text-white text-2xl p-10 text-center bg-slate-900 mt-4 rounded-lg hover:bg-slate-700 hover:text-blue-600">Hacker</Link>
        <Link href="/archetypes/idol"      className="text-white text-2xl p-10 text-center bg-slate-900 mt-4 rounded-lg hover:bg-slate-700 hover:text-blue-600">Pop-Idol</Link>
      </div>
      <div className="flex-grow p-2 pt-4 pb-0 md:overflow-y-auto">{children}</div>
    </main>
  );
}