import { useEffect, useState } from "react";
import { Promozione } from "../../../model";
import { UrlBase } from "../../../shared";

export function usePromozione() {
    const initialData : Promozione = {
        id: 0,
        nome: '',
        valore: 0,
        dataFine: ''
    };
    const [promozione, setPromozione] = useState<Promozione>(initialData)

    useEffect(() => {
        const promozioneModals = document.querySelectorAll('#dettagliPromozioneModal, #modificaPromozioneModal, #eliminaPromozioneModal')
        promozioneModals.forEach(promozioneModal =>
            promozioneModal.addEventListener('show.bs.modal', (event: any) => {
            const button = event.relatedTarget
            const id = button.getAttribute('data-bs-whatever')
            const url = `${UrlBase.API_PROMOZIONE}/${id}`;
            fetch(url, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(result => {
                setPromozione(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        }));
    }, []);

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setPromozione(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submitPut = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const url = UrlBase.API_PROMOZIONE;
        fetch(url, {
            method: 'PUT',
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

    const submitDelete = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const url = `${UrlBase.API_PROMOZIONE}?id=${promozione.id}`;
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
        promozione,
        change,
        submitPut,
        submitDelete
    }

}
