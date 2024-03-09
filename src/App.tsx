import CurrencySelect from './components/CurrencySelect';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import ExchangeRatesChart from './components/ExchangeRatesChart';
import { CurrencyTypeProvider } from './context/currencyTypeContext';
import ChartTitle from './components/ChartTitle';
import AvgRate from './components/AvgRate';
import type { IExchangeRateData } from './models/exchangeRate.interface';

import { useFetchData } from './hooks/useFetchData';
import './App.css';
import Loader from './components/Loader';
import FetchError from './components/FetchError';

function App() {
  const { data, loading, errorCode } = useFetchData(
    'https://65ec4b420ddee626c9afecaf.mockapi.io/api/rates'
  );

  if (errorCode)
    return (
      <Theme preset={presetGpnDefault}>
        <div className="app__container">
          <FetchError statusCode={errorCode} />
        </div>
      </Theme>
    );

  return (
    <Theme preset={presetGpnDefault}>
      <CurrencyTypeProvider>
        <div className="app__container">
          {loading ? (
            <Loader />
          ) : (
            <>
              <header className="app__header">
                <ChartTitle data={data as IExchangeRateData[]} />
                <CurrencySelect />
              </header>
              <section className="app__chart">
                <ExchangeRatesChart data={data as IExchangeRateData[]} />
                <AvgRate data={data as IExchangeRateData[]} />
              </section>
            </>
          )}
        </div>
      </CurrencyTypeProvider>
    </Theme>
  );
}

export default App;
