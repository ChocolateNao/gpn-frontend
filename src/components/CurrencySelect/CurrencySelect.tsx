import {
  ChoiceGroup,
  ChoiceGroupPropOnChange,
} from '@consta/uikit/ChoiceGroup';
import { useCurrency } from '../../hooks/useCurrency';
import { TCurrency } from '../../models/currency.type';
import { CurrencyTypeEnum } from '../../enums/currencyType.enum';

function CurrencySelect() {
  const { currency, updateCurrency } = useCurrency();

  const currencies: TCurrency[] = [
    CurrencyTypeEnum.USD,
    CurrencyTypeEnum.EUR,
    CurrencyTypeEnum.CNY,
  ];

  const onCurrencyChange: ChoiceGroupPropOnChange<TCurrency, false> = (e) => {
    updateCurrency(e.value);
  };

  return (
    <ChoiceGroup
      value={currency}
      size="xs"
      items={currencies}
      name="CurrencyChoiceGroup"
      getItemLabel={(item: TCurrency) => item}
      onChange={onCurrencyChange}
    />
  );
}

export default CurrencySelect;
