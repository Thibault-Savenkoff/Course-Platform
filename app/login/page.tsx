'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function ConnectPage() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    // Définir les mots de passe autorisés
    const allowedPasswords = [
        process.env.NEXT_PUBLIC_PASSWORD,
        process.env.NEXT_PUBLIC_PASSWORD_2 // Ajoutez d'autres mots de passe ici
    ];

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (allowedPasswords.includes(password)) {
            // Créer un cookie d'authentification
            Cookies.set('auth-token', 'your-auth-token', { expires: 1 }); // Le cookie expire dans 1 jour
            router.push('/docs');
        } else {
            setError('Mot de passe incorrect');
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <main className="relative min-h-screen">
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="font-bold text-6xl">Connect</h1>
                <form onSubmit={handleSubmit} className="mt-4 flex items-center">
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="px-4 py-2 border rounded-md pr-15" // Ajoutez de l'espace à droite pour le bouton
                        />
                        <button
                            type="button"
                            onClick={toggleShowPassword}
                            className="absolute inset-y-0 right-0 flex items-center justify-center px-3 py-2"
                            style={{ width: '40px', height: '40px' }} // Augmentez la taille du bouton
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </button>
                    </div>
                    <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                        Login
                    </button>
                </form>
                {error && <p className="mt-2 text-red-500">{error}</p>}
            </div>
        </main>
    );
}