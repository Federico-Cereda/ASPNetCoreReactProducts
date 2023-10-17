import { useEffect, useState } from "react";
import { Prodotto, ProdottoForm } from "../../../model";
import { UrlBase } from "../../../shared";

export function useProdotto() {
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

    useEffect(() => {
        const prodottoModals = document.querySelectorAll('#dettagliProdottoModal, #modificaProdottoModal, #eliminaProdottoModal')
        prodottoModals.forEach(prodottoModal =>
        prodottoModal.addEventListener('show.bs.modal', (event: any) => {
            const button = event.relatedTarget
            const id = button.getAttribute('data-bs-whatever')
            const url = `${UrlBase.API_PRODOTTO}/${id}`;
            fetch(url, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(result => {
                setProdotto(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        }));
    }, []);

    if (prodotto.idMarca === null) {
        prodotto.idMarcaNavigation = { id: 0, nome: 'Nessuna' }
    } else {};
    if (prodotto.idPromozione === null) {
        prodotto.idPromozioneNavigation = { id: 0, nome: 'Nessuna' }
    } else {};

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setProdotto(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submitPut = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const prodottoPut : ProdottoForm = {
            id: prodotto.id,
            nome: prodotto.nome,
            prezzo: prodotto.prezzo,
            peso: prodotto.peso,
            idMarca: prodotto.idMarca,
            idPromozione: prodotto.idPromozione
        };
        if (prodottoPut.idMarca == 0) {
            prodottoPut.idMarca = undefined
        } else {};
        if (prodottoPut.idPromozione == 0) {
            prodottoPut.idPromozione = undefined
        } else {};
        const url = UrlBase.API_PRODOTTO;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(prodottoPut)
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

    const submitDelete = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const url = `${UrlBase.API_PRODOTTO}?id=${prodotto.id}`;
        fetch(url, {
            method: 'DELETE'
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
        submitPut, 
        submitDelete 
    }

}
