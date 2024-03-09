import type { TCurrencyDisplayName } from './currency.type';

export interface IExchangeRate {
  date: string;
  month: string;
  indicator: TCurrencyDisplayName;
  value: number;
}
