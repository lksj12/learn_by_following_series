import React, { useEffect, useState } from "react";
import "./Banner.css";
import styled from "styled-components";
import axios from "axios";

export default function Banner() {
    const [movie, setMovie] = useState({});
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const request = await axios.get("/api/movies/fetchNowPlaying");

            const movieId =
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ].id;

            const { data: movieDetail } = await axios.get(`/api/movie/${movieId}`);

            setMovie(movieDetail);
        } catch (error) {
            console.error("Banner fetch error:", error);
        }
    };

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    const trailer = movie.videos?.results?.find(
        (video) => video.site === "YouTube"
    );

    console.log("movie", movie);

    if (!isClicked) {
        return (
            <header
                className="banner"
                style={{
                    backgroundImage: movie.backdrop_path
                        ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
                        : "none",
                    backgroundPosition: "top center",
                    backgroundSize: "cover",
                }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">
                        {movie.title || movie.name || movie.original_name}
                    </h1>

                    <div className="banner__buttons">
                        <button
                            className="banner__button play"
                            onClick={() => setIsClicked(true)}
                            disabled={!trailer}
                        >
                            Play
                        </button>
                        <button className="banner__button info">
                            More Information
                        </button>
                    </div>

                    <h1 className="banner__description">
                        {truncate(movie.overview, 100)}
                    </h1>
                </div>

                <div className="banner--fadeBottom" />
            </header>
        );
    }

    return (
        <Container>
            <HomeContainer>
                {trailer && (
                    <Iframe
                        width="640"
                        height="360"
                        src={`https://www.youtube.com/embed/${trailer.key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${trailer.key}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                )}
            </HomeContainer>
        </Container>
    );
}

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.65;
    border: none;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;