import NavbarClient from "@/components/NavbarClient";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavbarClient session={null} />
      {children}
    </main>
  );
}
