import { useEffect, useState } from "react";
import { Prodotto } from "../../../model";
import { UrlBase } from "../../../shared";

export function useProdotti() {
    const [prodotti, setProdotti] = useState<Prodotto[]>([])
    
    useEffect(() => {
        const url = UrlBase.API_PRODOTTO;
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            setProdotti(result);
        })
        .catch((error) => {
            console.log(error);
            alert(error);
        });
    }, []);

    prodotti.forEach( prodotto => {
        if (prodotto.idMarcaNavigation === null) {
            prodotto.idMarcaNavigation = {
                id: 0,
                nome: 'Nessuna'
            };
        };
        if (prodotto.idPromozioneNavigation === null) {
            prodotto.idPromozioneNavigation =  {
                id: 0,
                nome: 'Nessuna'
            };
        };
    });

    return prodotti

}
