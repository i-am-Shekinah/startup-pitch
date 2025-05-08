"use client";
import React from "react";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex top-1/4 sm:top-0 sm:items-center justify-center"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <DialogPanel className="relative z-50 bg-white rounded-lg p-6 sm:p-10 max-w-md w-full  shadow-lg">
        <DialogTitle className="text-2xl font-semibold">
          Log in or sign up in seconds
        </DialogTitle>
        <Description>
          <p className="text-sm font-light text-gray-500 mt-2 mb-4">
            Use your email or another service to continue with startup pitch.{" "}
            <strong>It&apos;s free!</strong>
          </p>
        </Description>
        {/* Continue buttons */}
        <section className="flex flex-col gap-4 mt-6">
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl:
                  typeof window !== "undefined" ? window.location.href : "/",
              })
            }
            type="button"
            className="btn-secondary flex items-center justify-center gap-2 w-full min-w-60 relative"
          >
            <span className="absolute left-6">
              <FcGoogle />
            </span>
            Continue with Google
          </button>

          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            type="button"
            className="btn-secondary flex items-center justify-center gap-2 w-full min-w-60 relative"
          >
            <span className="absolute left-6">
              <FaGithub />
            </span>
            Continue with GitHub
          </button>
        </section>
        <p className="mt-5 text-sm font-light ">
          By continuing, you agree to our{" "}
          <Link href="/policies/terms-of-use">
            <span className="text-primary underline">Terms of Service</span>
          </Link>{" "}
          and{" "}
          <span className="text-primary underline underline-offset-4">
            Privacy Policy.
          </span>
        </p>
      </DialogPanel>
    </Dialog>
  );
}
