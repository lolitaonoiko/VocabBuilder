import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    // const isLoggedIn = false;
    const location = useLocation();

    return isLoggedIn ? Component : <Navigate to={redirectTo} state={location} />;
};

export default PrivateRoute;
