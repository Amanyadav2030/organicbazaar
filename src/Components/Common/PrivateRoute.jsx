import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children }) {
    const {isAuth}= useSelector((store)=>store.authData);
    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default PrivateRoute;

// <PrivateRoute> children </PrivateRoute>
