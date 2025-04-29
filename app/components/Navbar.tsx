import Image from "next/image";
import Link from "next/link";

import { auth, signIn, signOut } from "@/auth";

export default async function Navbar() {
  const session = await auth();
  return (
    <>
      <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={166} height={48} />
            {/* 498x144 actual size */}
          </Link>

          <div className="flex items-center gap-5 text-black">
            {session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <button type="button">Create</button>
                </Link>

                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                  aria-label="Sign out"
                >
                  <button type="submit">Sign out</button>
                </form>

                <Link href={`/user/${session?.user?.id}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
                aria-label="Sign in with GitHub"
              >
                <button
                  type="submit"
                  className="cursor-pointer hover:text-red-500"
                >
                  Sign in
                </button>
              </form>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
