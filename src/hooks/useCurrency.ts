import { useContext } from 'react';
import { CurrencyContext } from '../context/currencyTypeContext';

export const useCurrency = () => useContext(CurrencyContext);
