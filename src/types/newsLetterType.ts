export interface NewsLetter {
  name: string;
  email: string;
}

export type ExtendedNewsLetter = NewsLetter & { uuid: string };

export interface UnsubscribeNewsLetter {
  uuid: string;
  email: string;
}
