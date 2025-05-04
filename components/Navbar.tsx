import Image from "next/image";
import Link from "next/link";

import { auth, signOut } from "@/auth";

export default async function Navbar() {
  const session = await auth();
  console.log(session);
  return (
    <>
      <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
          {/* logo */}
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={166} height={48} />
            {/* 498x144 actual size */}
          </Link>

          {/* nav links */}
          <div className="flex items-center gap-5 text-black">
            {session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <button type="button" className="btn-primary">
                    Create
                  </button>
                </Link>

                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                  aria-label="Sign out"
                >
                  <button type="submit" className="btn-secondary">
                    Sign out
                  </button>
                </form>

                <Link href={`/user/${session?.user?.id}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
              <>
                {/* display only on xs screens */}
                <Link href="/login-and-signup">
                  <button type="button" className="btn-primary sm:hidden">
                    Log in
                  </button>
                </Link>

                <Link href="/login-and-signup">
                  <button
                    type="button"
                    className="btn-secondary hidden sm:inline-block"
                  >
                    Log in
                  </button>
                </Link>
                <Link href="/login-and-signup">
                  <button
                    type="button"
                    className="hidden btn-primary sm:inline-block"
                  >
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
