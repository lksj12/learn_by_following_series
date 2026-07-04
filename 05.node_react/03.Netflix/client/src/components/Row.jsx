import { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";
import MovieModal from "../MovieModal";

import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Row({ title, fetchUrl, isLargeRow, id }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    useEffect(() => {
        async function fetchMovieData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }

        fetchMovieData();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    };

    return (
        <section className="row">
            <h2>{title}</h2>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
                spaceBetween={50}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                mousewheel={{ forceToAxis: false }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                <div className="row__posters">
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <img
                            className={`row__poster ${
                                isLargeRow ? "row__posterLarge" : ""
                            }`}
                            src={`${BASE_URL}${
                                isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            loading="lazy"
                            alt={movie.name || movie.title}
                            onClick={() => handleClick(movie)}
                        />
                    </SwiperSlide>
                ))}
                </div>
            </Swiper>

            {modalOpen && (
                <MovieModal
                    {...movieSelected}
                    setModalOpen={setModalOpen}
                />
            )}
        </section>
    );
}