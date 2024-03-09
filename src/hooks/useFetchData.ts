import { useEffect, useState } from 'react';
import { getData } from '../utils/getData';
import type { IExchangeRateData } from '../models/exchangeRate.interface';

export const useFetchData = (endpoint: string) => {
  const [data, setData] = useState<IExchangeRateData[] | null | undefined>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [errorCode, setErrorCode] = useState<number | null | undefined>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await getData(endpoint);

        if (apiData.status !== 200) {
          setErrorCode(apiData.status);
          setData(null);
        } else {
          setData(apiData.data);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, errorCode };
};
