import { useState } from "react";
import { Marca } from "../../../model";
import { UrlBase } from "../../../shared";

export function useMarcaCrea() {
    const initialData : Marca = {
        id: 0,
        nome: ''
    };
    const [marca, setMarca] = useState<Marca>(initialData)

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setMarca(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const close = () => {
        setMarca({ ...initialData });
    };

    const submitPost = (e: any) => {
        e.preventDefault();
        const url = UrlBase.API_MARCA;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(marca)
        })
        .then(response => response.json())
        // .then(state => setMarche({ ...state }))
        .then(responseFromServer => {
            console.log(responseFromServer);
            // window.location.reload();
        })
        .catch((error) => {
            console.log(error);
            alert(error);
        });
    };

    return {
        marca,
        change,
        close,
        submitPost
    }

}
