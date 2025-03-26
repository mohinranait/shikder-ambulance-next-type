import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./../styles/index.scss";
import { Providers } from "@/providers/Providers";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/providers/AuthProvider";
import ImageProvider from "@/providers/ImageProvider";
import MediaModal from "@/common/MediaModal";

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

export const metadata: Metadata = {
  title: "Shikder Ambulance",
  description: "Anytime, Anywhere is Available",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased overflow-x-hidden`}
      >
        <AuthProvider>
          <ImageProvider>
            <Providers>
              {children}
              <MediaModal />
            </Providers>
          </ImageProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
