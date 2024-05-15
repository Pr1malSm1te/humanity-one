'use client';

import {
  LuCircleSlash2,
  LuPlay,
  LuUser,
  LuWrench
} from 'react-icons/lu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Архетипы', href:    '/archetypes', icon: LuUser },
  { name: 'Ходы', href:        '/moves',icon: LuPlay},
  { name: 'Снаряжение', href:  '/equipment', icon: LuWrench },
  { name: 'ZER0', href:        '/zero', icon: LuCircleSlash2 },
];


export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'text-white flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-slate-900 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            )}
          >
            <LinkIcon className="w-5 h-5" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
