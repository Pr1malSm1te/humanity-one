import Link from 'next/link';
import NavLinks from '@/app/ui/topnavbar/nav-links';
import H0Logo from '@/app/ui/topnavbar/h0-logo';

export default function SideNav() {
  return (
    <div className="flex w-fit flex-row pt-8 md:px-2 md:space-x-10" >
      <Link
        className="mb-2 flex h-10 items-center justify-start p-4"
        href="/"
      >
        <div className="text-white">
          <H0Logo />
        </div>
      </Link>
      <div className="flex h-10 flex-row justify-left items-center space-x-2 md:flex-row md:space-x-2 ">
        <NavLinks />
      </div>
    </div>
  );
}
