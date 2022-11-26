export interface SigninRequest {
    username: string;
    password: string;
}

export interface SignupRequest {
    username: string;
    password: string;
}

export interface User {
    id: number;
    name: string;
}