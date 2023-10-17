import { useEffect, useState } from "react";
import { Promozione } from "../../../model";
import { UrlBase } from "../../../shared";


export function usePromozioni() {
    const [ promozioni, setPromozioni ] = useState<Promozione[]>([])

    useEffect(() => {
        const url = UrlBase.API_PROMOZIONE;
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            setPromozioni(result);
        })
        .catch((error) => {
            console.log(error);
            alert(error);
        });
    }, []);

    promozioni.forEach( promozione => {
        if (promozione.valore === null) {
            promozione.valore = undefined
        }
        if (promozione.dataFine === null) {
            promozione.dataFine = ''
        }
    });

    return promozioni
    
}