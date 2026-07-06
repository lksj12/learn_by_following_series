import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css"

const Layout = () => {
    return (
        <div>
            <Nav />
            
            <Outlet />

            <Footer />
        </div>
    )
}

export default function App() {
    return (
            <div className="app">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route path="/movie/:movieId" element={<DetailPage />} />
                        <Route path="search" element={<SearchPage />} />
                    </Route>
                </Routes>
            </div>
    );
}