'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        // Supprimer le cookie d'authentification
        Cookies.remove('auth-token');
        
        // Attendre 3 secondes avant de rediriger
        const timer = setTimeout(() => {
            router.push('/');
        }, 3000); // 3000 millisecondes = 3 secondes

        // Nettoyer le timer si le composant est démonté avant la fin du délai
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <main className="relative min-h-screen flex items-center justify-center">
            <h1 className="font-bold text-4xl sm:text-6xl">Déconnexion...</h1>
        </main>
    );
}