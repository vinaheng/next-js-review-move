const api = 'https://omdbapi.com/?apikey=2449ad88&i=';
const getCourses = async (id) => {
    try {
        const response = await fetch(api + id);
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

async function details({ params }) {
    const res = await getCourses(params.id);
    return (
        <div>
            <img src={res.Poster} alt="" className="fixed -z-10 object-cover blur-sm w-full h-full top-0 right-0" />
            <div className="p-4 bg-slate-800 bg-opacity-50 rounded-md flex gap-5">
                <img src={res.Poster} alt="" className="border rounded-md" />
                <div className="flex-1">
                    <h1 className="font-bold text-2xl">{res.Title}</h1>
                    <p className="mt-5">{res.Plot}</p>
                    <div className="flex justify-between">
                        <div>
                            <p className="mt-5">Year: {res.Year}</p>
                            <p className="mt-5">Rated: {res.Rated}</p>
                            <p className="mt-5">Released:{res.Released}</p>
                            <p className="mt-5">Runtime: {res.Runtime}</p>
                            <p className="mt-5">Genre: {res.Genre}</p>
                            <p className="mt-5">Director: {res.Director}</p>
                            <p className="mt-5">Writer {res.Writer}</p>
                        </div>

                        <button className="bg-green-800 font-bold h-10 px-4 rounded-md">Watch Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default details;
