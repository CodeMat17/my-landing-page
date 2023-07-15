import NavHeader from '@/components/NavHeader';
import './globals.css'
import { Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: 'Matthew | Web Developer',
  description: 'Chukwu Matthew is a full stack software developer working with modern tools like React, Next.js, tailwindcss, Supabase, etc',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={figtree.className}>
        <main className='bg-[#F2AA4C] text-[#101820] dark:bg-[#101820] dark:text-[#F2AA4C]'>
          <NavHeader />
          {children}
        </main>
      </body>
    </html>
  );
}
