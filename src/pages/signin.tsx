import { useState, useEffect } from "react";
import { authApi } from "../features/auth/auth.api";
import { SigninRequest } from "../features/auth/auth.models";
import { useNavigate } from 'react-router-dom';
import useLocalStorage from "../utils/hooks/useLocalStorage";
import { authLocalStorageKey } from "../utils/consts";

export default function Signin() {
    const [isLoading, setIsLoading] = useState(false);

    const [_, setUser] = useLocalStorage(authLocalStorageKey);

    const navigate = useNavigate();

    async function onSigninSubmit(request: SigninRequest) {
        try {
            setIsLoading(true);

            const user = await authApi.signin(request);
            setUser(user);
            navigate(`/`, { replace: true, relative: 'path' });
        } finally {
            setIsLoading(false);
        }
    }

    return <span> SIGNIN </span>
}