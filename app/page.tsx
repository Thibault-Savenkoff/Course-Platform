'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Link, { type LinkProps } from 'next/link';
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const token = Cookies.get('auth-token');
    if (token) {
      router.push('/docs');
    } else {
      router.push('/login');
    }
  };

  return (
    <main className="relative min-h-screen">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="font-bold">
            <p className="text-5xl">Bonjour !</p>
            <p className="text-5xl">Prêt à Étudier ?</p>
          </h1>
          <div className="mt-16 grid grid-cols-1">
            <Item href="/login" onClick={handleLoginClick}>
              <h2 className="mt-1 text-2xl font-semibold">Se Connecter</h2>
            </Item>
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
          <p className="text-xl lg:text-base mr-auto">Fait avec</p>
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

function Item(
  props: LinkProps & { children: React.ReactNode },
): React.ReactElement {
  return (
    <Link
      {...props}
      className="rounded-2xl border border-transparent p-10 shadow-lg transition-all hover:shadow-fd-primary/20"
      style={{
        backgroundImage:
          'linear-gradient(to right bottom, hsl(var(--background)) 10%, hsl(var(--accent)), hsl(var(--background)) 60%),' +
          'linear-gradient(to right bottom, rgb(40,40,40) 10%, rgb(180,180,180), rgb(30,30,30) 60%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {props.children}
    </Link>
  );
}