import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "..";
import { AuthContextType } from "../../model";

const RequireAuth = ({ allowedRoles }: { allowedRoles: number[] }) => {
    const { auth } = useAuth() as AuthContextType;
    const location = useLocation();

    return (
        allowedRoles.includes(auth?.idRuolo!) 
        ? <Outlet /> 
        : auth?.email 
        ? <Navigate to="/unauthorized" state={{ from: location }} replace /> 
        : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;
