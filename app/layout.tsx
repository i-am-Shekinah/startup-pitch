import "./globals.css";

import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import localFont from "next/font/local";

const workSans = localFont({
  src: [
    {
      path: "../public/fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Startup Pitch",
  description:
    "Discover and share innovative startup ideas on Startup Pitch — a platform where entrepreneurs showcase their ventures and receive real feedback from the community. Join now to get inspired or support the next big thing!",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "any",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.className}>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
