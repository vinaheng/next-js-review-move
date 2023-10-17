'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
    const [keyword, setKeyword] = useState(''); // Specify the type of 'keyword' as a string
    const router = useRouter();

    function onSearch() {
        router.push('/?s=' + keyword);
        setKeyword('');
    }

    const handleKeyPress = (event) => {
        if (!keyword) return;
        if (event.key === 'Enter') {
            // Check for the 'Enter' key
            onSearch();
        }
    };

    return (
        <header className="flex justify-center fixed z-10">
            <div className="container fixed py-4">
                <div className="flex justify-between gap-3">
                    <h1 className="font-bold text-3xl">Vina Move</h1>
                    <div>
                        <input
                            type="text"
                            value={keyword} // Changed 'onChange' to 'value' for input binding
                            onChange={(e) => setKeyword(e.target.value)}
                            className="rounded-md px-2 text-black"
                            placeholder="Search..."
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
