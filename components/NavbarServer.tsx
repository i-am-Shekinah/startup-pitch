import type { Session } from "next-auth";

import { auth } from "@/auth";

import NavbarClient from "./NavbarClient";

export default async function NavbarServer() {
  const session: Session | null = await auth();
  return <NavbarClient session={session} />;
}
