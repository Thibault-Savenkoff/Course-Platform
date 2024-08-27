'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ConnectPage() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simuler une vérification de mot de passe
        if (password === process.env.NEXT_PUBLIC_PASSWORD) {
            alert('Connexion réussie !');
            setError('');
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
                            className="px-4 py-2 border rounded-md"
                        />
                        <button
                            type="button"
                            onClick={toggleShowPassword}
                            className="absolute inset-y-0 right-0 px-3 py-2"
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </button>
                    </div>
                    <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                        Connect
                    </button>
                </form>
                {error && <p className="mt-2 text-red-500">{error}</p>}
            </div>
        </main>
    );
}