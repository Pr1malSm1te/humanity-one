import '@/app/ui/global.css';
import { roboto } from '@/app/ui/fonts';
 
export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-black antialiased container-snap`}>{children}</body>
    </html>
  );
}