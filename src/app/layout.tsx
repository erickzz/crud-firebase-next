'use client';

import { AuthContextProvider } from './context/auth-context';
import './globals.css';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Firebase',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const navegarHome = () => {
    router.push('/');
  };
  return (
    <html lang="pt-br">
      <AuthContextProvider>
        <body className={inter.className}>{children}</body>
      </AuthContextProvider>
    </html>
  );
}
