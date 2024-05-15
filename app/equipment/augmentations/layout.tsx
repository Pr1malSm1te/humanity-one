export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow p-2 pt-4 pb-0 md:overflow-y-auto">{children}</div>
  );
}