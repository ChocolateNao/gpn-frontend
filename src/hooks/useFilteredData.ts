import { TCurrency } from '../models/currency.type';
import { IExchangeRateData } from '../models/exchangeRate.interface';
import { currencyMapping } from '../utils/currencyMapping';

export const useFilteredData = (
  data: IExchangeRateData[],
  currency: TCurrency
) => {
  return data.filter((item) => item.indicator === currencyMapping[currency]);
};
