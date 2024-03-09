import type { ReactNode } from 'react';
import { createContext, useState } from 'react';
import type { TCurrency } from '../models/currency.type';
import { CurrencyTypeEnum } from '../enums/currencyType.enum';

interface CurrencyContextProps {
  currency: TCurrency;
  updateCurrency: (currency: TCurrency) => void;
}

export const CurrencyContext = createContext<CurrencyContextProps>({
  currency: CurrencyTypeEnum.USD,
  updateCurrency: () => {},
});

interface CurrencyProviderProps {
  children: ReactNode;
}

export function CurrencyTypeProvider({ children }: CurrencyProviderProps) {
  const localCurrency: TCurrency | undefined = localStorage.getItem(
    'CHOCONAO_currency'
  ) as TCurrency;
  const initCurrency: TCurrency = localCurrency ?? CurrencyTypeEnum.USD;

  if (!localCurrency) {
    localStorage.setItem('CHOCONAO_currency', CurrencyTypeEnum.USD);
  }

  const [currency, setCurrency] = useState<TCurrency>(initCurrency);

  const updateCurrency = (currencyType: TCurrency) => {
    setCurrency(currencyType);
    localStorage.setItem('CHOCONAO_currency', currencyType);
  };

  return (
    <CurrencyContext.Provider value={{ currency, updateCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}
