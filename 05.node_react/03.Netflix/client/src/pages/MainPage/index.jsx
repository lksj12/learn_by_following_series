import Banner from "../../components/Banner";
import Row from "../../components/Row";

export default function MainPage() {
    return(
        <>
            <Banner />

            <Row title="NETFLIX ORIGINALS" id="NO" fetchUrl="/api/movies/fetchNetflixOriginals" isLargeRow />
            <Row title="Trending Now" id="TN" fetchUrl="/api/movies/fetchTrending" />
            <Row title="Top Rated" id="TR" fetchUrl="/api/movies/fetchTopRated" />
            <Row title="Action Movies" id="AM" fetchUrl="/api/movies/fetchActionMovies" />
            <Row title="Comedy Movies" id="CM" fetchUrl="/api/movies/fetchComedyMovies" />
            <Row title="Horror Movies" id="HM" fetchUrl="/api/movies/fetchHorrorMovies" />
            <Row title="Romance Movies" id="RM" fetchUrl="/api/movies/fetchRomanceMovies" />
            <Row title="Documentaries" id="DM" fetchUrl="/api/movies/fetchDocumentaries" />
        </>
    )
}