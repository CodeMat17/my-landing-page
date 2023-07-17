import NavHeader from "@/components/NavHeader";
import { Figtree, Poiret_One } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });
const poiret = Poiret_One({ subsets: ["cyrillic", "latin"], weight: ["400"] });

export const metadata = {
  title: "Matthew Chukwu | Web Developer",
  description:
    "Matthew Chukwu is a full stack developer working with modern tools like React, Next.js, tailwindcss, Supabase, etc",
  verification: {
    google:
      "_--Wmm-7tckulPdcx_AGlKFQuOCJWM73xEWilEPIaIw",
  },
  openGraph: {
    title: "Matthew Chukwu | Web Developer",
    description:
      "Matthew Chukwu is a full stack developer working with modern tools like React, Next.js, tailwindcss, Supabase, etc",
    url: "https://www.matthewchukwu.com.ng/",
    // siteName: "My portfolio website",
    images: [
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1689562761/Soft-lutions/Seo/dev.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1689562761/Soft-lutions/Seo/dev.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
    authors: ["Matthew Chukwu"],
  },
  robots: {
    index: true,
    nocache: false,
  },
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
