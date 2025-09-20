
import {Navigate} from "react-router-dom";

function PrivateRoute({children}) {
    let isValid = localStorage.getItem("isLoggedIn");

    return isValid ? children : <Navigate to="/" />
}

export default PrivateRoute;