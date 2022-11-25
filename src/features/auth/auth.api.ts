import { apiUrl, basicRequestSettings } from '../../utils/consts';
import { User, SigninRequest, SignupRequest } from './auth.models';

export const authApi = {
    signin,
    signup
};

async function signin(request: SigninRequest): Promise<User> {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(request),
        ...basicRequestSettings
    };

    /*const response = await fetch(`${apiUrl}/account/signin`, requestOptions);

    const text = await response.text();
    const user = text && JSON.parse(text);*/

    return { id: 0, name: '0' };
}

async function signup(request: SignupRequest): Promise<User> {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(request),
        ...basicRequestSettings
    };

    const response = await fetch(`${apiUrl}/account/signup`, requestOptions);

    const text = await response.text();
    const service = text && JSON.parse(text);

    return service;
}