import { usePromozioni } from "../../promozione/hooks/usePromozioni";

export default function ListaPromozioni() {

    const promozioni = usePromozioni()
    
    return (
        <>
        {promozioni.map((promozione) => (
            <option key={promozione.id} value={promozione.id}>
                {promozione.nome}
            </option>
        ))}
        </>
    );

};

