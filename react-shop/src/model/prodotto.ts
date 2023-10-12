  export interface Prodotto {
    id: number;
    nome: string;
    prezzo: number;
    peso: number;
    idMarca?: number;
    idPromozione?: number;
    // idCategoria: number;
    // idLifeStyle: number;
    // idGalleria: number;
    // idInformazione: number;
    idMarcaNavigation: IdMarcaNavigation;
    idPromozioneNavigation: IdPromozioneNavigation;
  }

  export interface IdMarcaNavigation {
    id: number;
    nome: string;
    // prodotto?: (null)[] | null;
  }
  
  export interface IdPromozioneNavigation {
    id: number;
    nome: string;
    valore?: number;
    dataFine?: string;
    // prodotto?: (null)[] | null;
  }

  export type ProdottoFormCrea = Omit<Prodotto, 'id' | 'idMarcaNavigation' |'idPromozioneNavigation'>

  export type ProdottoFormModifica = Omit<Prodotto, 'idMarcaNavigation' |'idPromozioneNavigation'>
  