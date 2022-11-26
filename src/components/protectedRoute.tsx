import { Navigate } from 'react-router-dom';
import { authLocalStorageKey, defaultNonAuthPageRoute } from "../utils/consts";
import useLocalStorage from "../utils/hooks/useLocalStorage";

interface OwnProps {
    children: React.ReactNode;
};

export const ProtectedRoute: React.FC<OwnProps> = ({
    children
}) => {

    const [user, _] = useLocalStorage(authLocalStorageKey);

    if (!user) {
        return <Navigate to={defaultNonAuthPageRoute} replace />;
    }

    return <>
        {children}
    </>;
}