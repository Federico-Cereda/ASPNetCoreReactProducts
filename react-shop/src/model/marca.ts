export interface Marca {
    id: number;
    nome: string;
    // prodotto?: (null)[] | null;
  }

  export type MarcaForm = Omit<Marca, 'id'>
  