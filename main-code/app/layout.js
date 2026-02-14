import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "LinkTree - Your favorite link sharing site",
  description: "We brought a revolution in link sharing",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col justify-start items-center relative overflow-x-hidden">
          <Navbar />
          <main className="w-full flex-1 flex flex-col animate-fade-in">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
