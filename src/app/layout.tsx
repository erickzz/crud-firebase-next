'use client';

import NavBar from './components/NavBar';
import { AuthContextProvider } from './context/auth-context';
import './globals.css';
import { Inter } from 'next/font/google';
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
  return (
    <html lang="pt-br">
      <AuthContextProvider>
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </AuthContextProvider>
    </html>
  );
}
