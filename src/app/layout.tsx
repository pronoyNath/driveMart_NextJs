import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import personalLogo from "../assets/ANlogoWhiteTransparent.png";
import Image from "next/image";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DriveMart",
  description: "Find your dream car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} `}>
          <Header />
          <main className="min-h-screen">{children}</main>

          <footer className="bg-black w-full flex  flex-row-reverse justify-center items-center text-white font-semibold">
            <h3>Mady by A.N.PRONOY </h3>
            <Image src={personalLogo} alt="brand" width={40} height={40} />
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
