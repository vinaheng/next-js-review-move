// 'use client';
import Cart from '@/app/Components/UI/Cart/index';
import Link from 'next/link';
// import { useRouter, useSearchParams } from 'next/navigation';
const api = 'https://omdbapi.com/?apikey=2449ad88&s=';
const getCourses = async (keyword) => {
    try {
        const response = await fetch(api + keyword);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parse the JSON response
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Handle or re-throw the error as needed
    }
};
export default async function Home() {
    // const searchParams = useSearchParams();
    // const search = searchParams.get('s');
    const keyword = 'spider man';

    const res = await getCourses(keyword);
    return (
        <div>
            <img
                src={process.env.BACKGROUND}
                alt=""
                className="fixed -z-10 object-contain blur-sm w-scree top-0 right-0"
            />
            <div className="h-screen">
                <p className="text-sm">All Movies</p>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mt-5">
                    {res.Search.map((item) => {
                        return (
                            <Link href={'/details/' + item.imdbID}>
                                <Cart title={item.Title} dsc={item.Year} poster={item.Poster} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
