import { getAuth } from "firebase/auth";
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';
const RequireAuth = ({children}) => {
    const auth=getAuth(app);
    const location =useLocation();
    if(!auth.user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;