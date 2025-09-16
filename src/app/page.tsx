// app/page.tsx

import HomePage from "./home/page";

// Metadata for the page, including the favicon
export const metadata = {
  title: "Tree Bazar",
  description: "Welcome to Tree Bazar",
  icons: {
    icon: "/favicon-2.ico",
  },
};

export default function Home() {
  return (
    <div className="font-sans grid justify-items-center min-h-screen bg-[#f5f5f5]">
      <main className="flex flex-col w-full max-w-7xl">
        <HomePage />
      </main>
    </div>
  );
}
