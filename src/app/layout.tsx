import { Inter, Catamaran } from 'next/font/google';

import 'styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] });
const catamaran = Catamaran({ subsets: ['latin'] });

export const metadata = {
  title: 'Viaje Holdings',
  description: 'Viaje Holdings official website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={catamaran.className}>{children}</body>
    </html>
  );
}
