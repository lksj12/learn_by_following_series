import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import useDebounce from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

import "./SearchPage.css";

export default function SearchPage() {
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const searchQuery = query.get("query");

    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    useEffect(() => {
        if (debouncedSearchQuery) {
            fetchSearchMovie(debouncedSearchQuery);
        }
    }, [debouncedSearchQuery]);

    const fetchSearchMovie = async (searchQuery) => {
        try {
            const request = await axios.get(`/api/search/${encodeURIComponent(searchQuery)}`);
            setSearchResults(request.data.results);
        }
        catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    const renderSearchResults = () => {
        return searchResults.length > 0 ? (
            <section className="search-container">
                {searchResults.map((movie) => {
                    if (movie.backdrop_path !== null && movie.media_type !== "person") {
                        const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;

                        return (
                            <div className="movie" key={movie.id}>
                                <div onClick={() => navigate(`/movie/${movie.id}`)}
                                    className="movie__column-poster">
                                    <img
                                        src={movieImageUrl}
                                        alt={movie.title || movie.name}
                                        className="movie__poster"
                                    />
                                </div>
                            </div>
                        );
                    }

                    return null;
                })}
            </section>
        ) : (
            <section className="no-results">
                <div className="no-results__text">
                    <p>
                        찾으시는 검색어 "{debouncedSearchQuery}"에 맞는 영화가 없습니다.
                    </p>
                </div>
            </section>
        );
    };

    return renderSearchResults();
}