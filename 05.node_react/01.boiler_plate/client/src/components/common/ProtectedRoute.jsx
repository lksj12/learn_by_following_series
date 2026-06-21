import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { authUser } from "../../features/user/userSlice";

function ProtectedRoute({ children, option, adminRoute = false }) {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        dispatch(authUser())
            .then((res) => {
                setIsAuth(res.payload.isAuth);
                setIsAdmin(res.payload.isAdmin || false);
                setIsLoading(false);
            });
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    // option === true
    // 로그인한 유저만 접근 가능
    if (option === true && !isAuth) {
        return <Navigate to="/login" replace />;
    }

    // option === false
    // 로그인한 유저는 접근 불가능
    if (option === false && isAuth) {
        return <Navigate to="/" replace />;
    }

    // adminRoute === true
    // 관리자만 접근 가능
    if (adminRoute && !isAdmin) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute;