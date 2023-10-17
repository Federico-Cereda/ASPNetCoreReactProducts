import { useState } from "react";
import { Prodotto, ProdottoForm } from "../../../model";
import { UrlBase } from "../../../shared";

export function useProdottoCrea() {
    const initialData : Prodotto = {
        id: 0,
        nome: '',
        prezzo: 0,
        peso: 0,
        idMarca: 0,
        idPromozione: 0,
        idMarcaNavigation: {
            id: 0,
            nome: 'Nessuna'
        },
        idPromozioneNavigation: {
            id: 0,
            nome: 'Nessuna'
        }
    };
    const [prodotto, setProdotto] = useState<Prodotto>(initialData)

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setProdotto(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const close = () => {
       setProdotto({ ...initialData });
    };

    const submitPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const prodottoPost : ProdottoForm = {
            id: prodotto.id,
            nome: prodotto.nome,
            prezzo: prodotto.prezzo,
            peso: prodotto.peso,
            idMarca: prodotto.idMarca,
            idPromozione: prodotto.idPromozione
        };
        if (prodottoPost.idMarca == 0) {
            prodottoPost.idMarca = undefined
        } else {};
        if (prodottoPost.idPromozione == 0) {
            prodottoPost.idPromozione = undefined
        } else {};
        const url = UrlBase.API_PRODOTTO;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(prodottoPost)
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
        prodotto, 
        change, 
        close, 
        submitPost
    }

}
