import { CommandLineIcon} from '@heroicons/react/24/outline';

export default function H0Logo() {
  return (
    <div
      className= "flex flex-row justify-left items-center leading-none text-white space-x-2"
    >
      <CommandLineIcon className="h-14 w-14" />
      <p className="text-[44px]">H0</p>
    </div>
  );
}
