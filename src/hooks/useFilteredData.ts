import { TCurrency } from '../models/currency.type';
import { IExchangeRate } from '../models/exchangeRate.interface';
import { currencyMapping } from '../utils/currencyMapping';

export const useFilteredData = (data: IExchangeRate[], currency: TCurrency) => {
  return data.filter((item) => item.indicator === currencyMapping[currency]);
};
