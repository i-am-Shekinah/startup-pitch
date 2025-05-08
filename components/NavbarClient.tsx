"use client";
import { useState } from "react";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import LoginModal from "./LoginModal";

export default function NavbarClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const { data: session } = useSession();
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
          <div className="flex items-center sm:gap-5 text-black">
            {session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <button type="button" className="btn-primary">
                    Create
                  </button>
                </Link>

                <button
                  type="button"
                  onClick={() => signOut()}
                  className="btn-secondary"
                >
                  Sign out
                </button>

                {session.user?.id && (
                  <Link href={`/user/${session?.user?.id}`}>
                    <span>{session?.user?.name}</span>
                  </Link>
                )}
              </>
            ) : (
              <>
                {/* display only on xs screens */}
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="btn-primary !px-4 sm:hidden"
                >
                  Log in
                </button>

                {/* display on sm and > screens */}
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="btn-secondary hidden sm:inline-block"
                >
                  Log in
                </button>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="btn-primary hidden sm:inline-block"
                >
                  Sign up
                </button>

                <LoginModal
                  isOpen={modalOpen}
                  onClose={() => setModalOpen(false)}
                />
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
