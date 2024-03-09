import { useState } from 'react';
import { TCurrency } from '../models/currency.type';
import { CurrencyTypeEnum } from '../enums/currencyType.enum';

export const useCurrency = () => {
  const initCurrency: TCurrency =
    (localStorage.getItem('CHOCONAO_currency') as TCurrency) ??
    CurrencyTypeEnum.USD;
  const [currency, setCurrency] = useState<TCurrency>(initCurrency);

  const updateCurrency = (currency: TCurrency) => {
    setCurrency(currency);
    localStorage.setItem('CHOCONAO_currency', currency);
  };

  return { currency, updateCurrency };
};
