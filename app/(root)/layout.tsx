import NavbarClient from "@/components/NavbarClient";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavbarClient />
      {children}
    </main>
  );
}
