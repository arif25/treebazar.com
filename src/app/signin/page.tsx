
import SignInForm from "@/app/signin/SigninForm";
import Link from "next/link";
import Image from "next/image";
import SignupHeader from "../signup/SignupHeader";
import Bodybg from "../assets/bodybg";

export default function SignInPage() {
  return (
    <>
      <Bodybg />
      <main className="min-h-screen ">
        <SignupHeader />
        <section className="flex justify-center items-start py-10 px-4">
          <SignInForm />
        </section>
        <footer className="text-center text-xs text-gray-500 py-4 space-x-4">
          <Link href="/termsandconditions">Conditions of Use</Link>
          <Link href="/privacypolicy">Privacy Notice</Link>
          <a href="#">Help</a>
          <p className="mt-1">© 1996–2025, Treebazaar.com, Inc. or its affiliates</p>
        </footer>
      </main>
    </>
  );
}
