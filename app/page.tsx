import Link from 'next/link';
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="font-bold">
            <p className="text-5xl">Hi!</p>
            <p className="text-5xl">Ready To Study?</p>
          </h1>
          <div className="mt-4">
            <a href="/connect" className="inline-block px-5 py-3 rounded-lg shadow-lg white:bg-slate-300 dark:bg-slate-600">Connect</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-4 lg:transform-none">
        <Link
          className="pointer-events-auto flex flex-col items-center lg:flex-row lg:items-center lg:gap-2"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-pw lg:text-base mr-auto">Powered by</p>
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </Link>
      </div>
    </main>
  );
}