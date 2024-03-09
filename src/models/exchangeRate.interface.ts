import type { TCurrencyDisplayName } from './currency.type';

export interface IExchangeRateData {
  date: string;
  month: string;
  indicator: TCurrencyDisplayName;
  value: number;
}
