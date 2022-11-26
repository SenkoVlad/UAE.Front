export const apiUrl: string = 'https://localhost:7016/api';

export const authLocalStorageKey: string = "user";

export const defaultNonAuthPageRoute: string = "signin";

export const basicRequestSettings: RequestInit = {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'
}