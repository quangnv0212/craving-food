import AppProvider from '@/components/providers/app-provider';
import DashBoardLayoutProvider from '@/components/providers/dashboard-layout-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <DashBoardLayoutProvider>{children}</DashBoardLayoutProvider>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
