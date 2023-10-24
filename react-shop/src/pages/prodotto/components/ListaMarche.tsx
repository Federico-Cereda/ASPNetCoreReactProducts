import { useMarche } from "../../marca/hooks/useMarche";
import { useProdottoCrea } from "../hooks/useProdottoCrea";

export default function ListaMarche() {

    const { marche, getMarche } = useMarche()
    const { prodotto, change } = useProdottoCrea()
    
    getMarche();

    return (
        <select className="form-select" name="idMarca" value={prodotto.idMarca} onChange={change}>
            <option value={0}>Nessuna</option>
            {marche.map((marca) => (
            <option key={marca.id} value={marca.id}>
                {marca.nome}
            </option>
            ))}
        </select>
    );

};
