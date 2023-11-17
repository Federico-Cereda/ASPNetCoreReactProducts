import { useMarche } from "../../marca/hooks/useMarche";

export default function ListaMarche() {

    const { marche, getMarche } = useMarche()

    getMarche();

    return (
        <>
        {marche.map((marca) => (
            <option key={marca.id} value={marca.id}>
                {marca.nome}
            </option>
        ))}
        </>
    );

};
