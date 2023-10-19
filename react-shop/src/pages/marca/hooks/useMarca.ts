import { useEffect, useState } from "react";
import { Marca } from "../../../model";
import { UrlBase } from "../../../shared";

export function useMarca() {
    const initialData : Marca = {
        id: 0,
        nome: ''
    };
    const [marca, setMarca] = useState<Marca>(initialData)

    useEffect(() => {
        const marcaModals = document.querySelectorAll('#dettagliMarcaModal, #modificaMarcaModal, #eliminaMarcaModal')
        marcaModals.forEach(marcaModal =>
            marcaModal.addEventListener('show.bs.modal', (event: any) => {
            const button = event.relatedTarget
            const id = button.getAttribute('data-bs-whatever')
            const url = `${UrlBase.API_MARCA}/${id}`;
            fetch(url, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(result => {
                setMarca(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        }));
    }, []);

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setMarca(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submitPut = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const url = UrlBase.API_MARCA;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(marca)
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
        const url = `${UrlBase.API_MARCA}?id=${marca.id}`;
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
        marca,
        change,
        submitPut,
        submitDelete
    }

}
