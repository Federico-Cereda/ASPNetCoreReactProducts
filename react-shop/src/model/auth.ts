export interface IAuth {
    email: string | null,
    pwd: string | null,
    idRuolo: number | null,
    accessToken: string | null
}

export type AuthContextType = {
    auth: IAuth;
    setAuth: (auth: IAuth) => void;
}
