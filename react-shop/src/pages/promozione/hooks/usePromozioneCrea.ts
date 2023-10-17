import { useState } from "react";
import { Promozione } from "../../../model";
import { UrlBase } from "../../../shared";

export function usePromozioneCrea() {
    const initialData : Promozione = {
        id: 0,
        nome: '',
        valore: 0,
        dataFine: ''
    };
    const [promozione, setPromozione] = useState<Promozione>(initialData)

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setPromozione(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const close = () => {
        setPromozione({ ...initialData });
    };

    const submitPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const url = UrlBase.API_PROMOZIONE;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(promozione)
        })
        .then(response => response.json())
        .then(responseFromServer => {
            console.log(responseFromServer);
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
            alert(error);
        });
    };

    return {
        promozione,
        change,
        close,
        submitPost
    }

}
