import { CurrencyTypeEnum } from '../enums/currencyType.enum';

export type TCurrency = '$' | '€' | '¥';
export type TCurrencyDisplayName = 'Курс доллара' | 'Курс евро' | 'Курс юаня';

export type CurrencyMapping = {
  [key in TCurrency]: TCurrencyDisplayName;
};

export const currencyMapping: CurrencyMapping = {
  [CurrencyTypeEnum.USD]: 'Курс доллара',
  [CurrencyTypeEnum.EUR]: 'Курс евро',
  [CurrencyTypeEnum.CNY]: 'Курс юаня',
};
