import { useState, useEffect } from "react"
import { Navigate } from 'react-router-dom';
import { authLocalStorageKey, defaultNonAuthPageRoute } from "../utils/consts";
import useLocalStorage from "../utils/hooks/useLocalStorage";

export function NoMatch() {

    const countDownNumber = 3;

    const [countDown, setCountDown] = useState(countDownNumber);
    const [user, _] = useLocalStorage(authLocalStorageKey);

    const isLoggedIn = !!user;
    const text = isLoggedIn ? 'LOGGED IN' : 'NOT FOUND';

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCountDown(countDown - 1);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [countDown]);

    return <span>
        {countDown <= 0 ? <Navigate to={isLoggedIn ? `/${user.role}` : defaultNonAuthPageRoute} replace /> : `${text} | Redirect to Sign in page in: ${countDown}sec.`};
    </span>
}