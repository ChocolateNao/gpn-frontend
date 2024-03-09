import type { IExchangeRateData } from '../models/exchangeRate.interface';

export const getData = async (
  endpoint: string
): Promise<{
  status?: number;
  isError: boolean;
  errorText?: string;
  data?: IExchangeRateData[];
}> => {
  try {
    const res = await fetch(endpoint);
    const data: IExchangeRateData[] = await res.json();
    return {
      status: res.status,
      isError: false,
      data: data,
    };
  } catch (e) {
    return {
      isError: true,
      errorText: String(e),
    };
  }
};
