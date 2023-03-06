import React, { useEffect, useState } from "react"

const Prodotti = () => {

    const [prodotti, setProdotti] = useState([])
    useEffect(() => {
        fetch('https://localhost:7273/api/Prodotto', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(result => {
                setProdotti(result);
            })
    })
        .catch(error => console.log('error', error));

    return (
        <main>
            {
                prodotti.map((prodotto) => (
                    <p>{prodotto}</p>
                ))
            }
        </main>
    )

}

export default Prodotti
