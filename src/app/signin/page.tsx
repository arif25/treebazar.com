
import SignInForm from "@/app/signin/SigninForm";
import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-[#f7fafa]">
      <header className="flex items-center justify-between px-8 py-4 border-b">
        <div className="w-[1220px] mx-auto text-xl font-bold text-green-700">
          <Link href="./home">
              <Image src="/images/logoTreeBazaar.svg" alt="logo" width={120} height={100} />
          </Link>
        </div>
      </header>

      <section className="flex justify-center items-start py-10 px-4">
        <SignInForm />
      </section>

      <footer className="text-center text-xs text-gray-500 border-t py-4 space-x-4">
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Help</a>
        <p className="mt-1">© 1996–2025, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </main>
  );
}
