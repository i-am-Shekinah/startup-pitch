import { IBM_Plex_Serif } from "next/font/google";

import Navbar from "@/components/Navbar";

const poppins = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${poppins.variable}`}>
      <Navbar />
      {children}
    </main>
  );
}
