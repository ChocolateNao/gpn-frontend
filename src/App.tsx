import CurrencySelect from './components/CurrencySelect';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

function App() {
  return (
    <Theme preset={presetGpnDefault}>
      <CurrencySelect />
    </Theme>
  );
}

export default App;
