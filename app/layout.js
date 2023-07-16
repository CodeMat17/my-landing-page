import NavHeader from "@/components/NavHeader";
import { Figtree, Poiret_One } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });
const poiret =  Poiret_One({subsets: ['cyrillic', 'latin'], weight: ['400']})

export const metadata = {
  title: "Matthew | Web Developer",
  description:
    "Chukwu Matthew is a full stack software developer working with modern tools like React, Next.js, tailwindcss, Supabase, etc",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className='light'
      style={{ colorScheme: "light" }}
      suppressHydrationWarning>
      <body>
    
          <main className={figtree.className}>
            <Providers>
              <NavHeader />
              {children}
            </Providers>
          </main>
   
      </body>
    </html>
  );
}
