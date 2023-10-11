export interface Promozione {
    id: number;
    nome: string;
    valore?: number;
    dataFine?: string;
    // prodotto?: (null)[] | null;
  }

  export type PromozioneForm = Omit<Promozione, 'id'>
  