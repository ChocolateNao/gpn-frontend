import CurrencySelect from './components/CurrencySelect';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import ExchangeRatesChart from './components/ExchangeRatesChart';
import { mockData } from './data/data';
import { CurrencyTypeProvider } from './context/currencyTypeContext';
import ChartTitle from './components/ChartTitle';
import './App.css';
import AvgRate from './components/AvgRate';

function App() {
  return (
    <Theme preset={presetGpnDefault}>
      <CurrencyTypeProvider>
        <div className="app__container">
          <header className="app__header">
            <ChartTitle data={mockData} />
            <CurrencySelect />
          </header>
          <section className="app__chart">
            <ExchangeRatesChart data={mockData} />
            <AvgRate data={mockData} />
          </section>
        </div>
      </CurrencyTypeProvider>
    </Theme>
  );
}

export default App;
