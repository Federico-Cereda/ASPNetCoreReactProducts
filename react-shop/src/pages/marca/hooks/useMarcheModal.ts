import { create } from "zustand";
import { Marca } from "../../../model";

export interface MarcheModalState {
    listaMarche: Marca[];
    aggiungiMarca: () => void;
    // modificaMarca: (marcaModifica: Marca) => void;
    eliminaMarca: (marcaId: number) => void;
}

export const useMarcheModal = create<MarcheModalState>((set) => ({
    listaMarche: ([]),
    aggiungiMarca: () => set(state => ({ listaMarche: state.listaMarche })),
    // modificaMarca: (marcaModifica : Marca) => set(state => ({ listaMarche: state.listaMarche.find(marca => marca.id === marcaModifica.id ) = marcaModifica })),
    eliminaMarca: (marcaId : number) => set(state => ({ listaMarche: state.listaMarche.filter(marca => marca.id !== marcaId ) })),
}))
