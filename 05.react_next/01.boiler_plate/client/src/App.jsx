import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/common/ProtectedRoute";

import LandingPage from "./components/views/LandingPage/LandingPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import LoginPage from "./components/views/LoginPage/LoginPage";

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute option={null}>
                            <LandingPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <ProtectedRoute option={false}>
                            <RegisterPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/login"
                    element={
                        <ProtectedRoute option={false}>
                            <LoginPage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;