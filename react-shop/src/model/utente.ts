export interface UtenteRegister {
    username: string;
    email:  string;
    password: string;
    idRuolo: number;
}

export interface UtenteLogin {
    email:  string;
    password: string;
}
