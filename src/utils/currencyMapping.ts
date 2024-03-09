import { CurrencyTypeEnum } from '../enums/currencyType.enum';
import type { TCurrency, TCurrencyDisplayName } from '../models/currency.type';

export type CurrencyMapping = {
  [key in TCurrency]: TCurrencyDisplayName;
};

export const currencyMapping: CurrencyMapping = {
  [CurrencyTypeEnum.USD]: 'Курс доллара',
  [CurrencyTypeEnum.EUR]: 'Курс евро',
  [CurrencyTypeEnum.CNY]: 'Курс юаня',
};
