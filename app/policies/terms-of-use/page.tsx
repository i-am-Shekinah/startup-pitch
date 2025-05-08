import { auth } from "@/auth";
import NavbarClient from "@/components/NavbarClient";

export default async function TermsOfUse() {
  const session = await auth();
  return (
    <>
      <NavbarClient session={session} />
      <h1 className="text-2xl">Terms of Use</h1>
      <p>
        By using this website, you agree to the following terms and conditions.
        If you do not agree with these terms, please do not use this website.
      </p>
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using this website, you agree to be bound by these terms
        and conditions and our Privacy Policy. If you do not agree to these
        terms, please do not use this website.
      </p>
    </>
  );
}
