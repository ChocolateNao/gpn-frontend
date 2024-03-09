import type { IExchangeRate } from '../models/exchangeRate.interface';

export const getData = async (endpoint: string): Promise<IExchangeRate[]> => {
  const res = await fetch(endpoint);
  // res.status
  const data: IExchangeRate[] = await res.json();
  return data;
};
