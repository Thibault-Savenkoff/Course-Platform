import Link from 'next/link';
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <div className="text-center p-52">
        <h1 className="font-bold">
          <p className="text-5xl">Hi!</p>
          <p className="text-5xl">Ready To Study?</p>
        </h1>
        <div className="mt-4">
          <a href="/docs" className="inline-block px-5 py-3 rounded-lg shadow-lg white:bg-slate-300 dark:bg-slate-600">Connect</a>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex items-start">
        <Link
          className="pointer-events-auto lg:flex gap-2"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="sm:text-pw lg:text-base">Powered by{" "}</p>
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
