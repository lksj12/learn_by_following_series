import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(`/api/movie/${movieId}`);
                setMovie(request.data);
            }
            catch (error) {
                console.error("Error fetching movie detail:", error);
            }
        }

        fetchData();
    }, [movieId]);

    if (!movie) return null;

    const movieImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`;

    return (
        <section>
            <img
                className="modal__poster-img"
                src={movieImageUrl}
                alt={movie.title || movie.name}
            />
        </section>
    );
}