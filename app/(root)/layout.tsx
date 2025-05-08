import { auth } from "@/auth";
import NavbarClient from "@/components/NavbarClient";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <main>
      <NavbarClient session={session} />
      {children}
    </main>
  );
}
