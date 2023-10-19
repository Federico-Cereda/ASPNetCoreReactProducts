import { useEffect, useState } from "react";
import { Marca } from "../../../model";
import { UrlBase } from "../../../shared";

export function useMarche() {
    const [marche, setMarche] = useState<Marca[]>([])

    useEffect(() => {
        const url = UrlBase.API_MARCA;
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            setMarche(result);
        })
        .catch((error) => {
            console.log(error);
            alert(error);
        });
    }, []);

    return marche

}
