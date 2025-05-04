import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { signIn } from "@/auth";

export default function Login() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold">Log in or sign up in seconds</h1>
      <p className="font-light font- text-gray-500 mt-2 mb-4">
        Use your email or another service to continue with startup pitch.
        <strong> It&apos;s free!</strong>
      </p>

      {/* continue buttons */}
      <section className="flex flex-col gap-4 mt-6 ">
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="btn-secondary flex items-center justify-center gap-2 relative sm:w-90"
          >
            <span className="absolute left-6">
              <FcGoogle />
            </span>
            Continue with Google
          </button>
        </form>

        <form
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="btn-secondary flex items-center justify-center gap-2 relative sm:w-90"
          >
            <span className="absolute left-6">
              <FaGithub />
            </span>
            Continue with GitHub
          </button>
        </form>
      </section>
    </main>
  );
}
