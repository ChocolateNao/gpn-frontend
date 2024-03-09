import { useCurrency } from '../../hooks/useCurrency';
import { useFilteredData } from '../../hooks/useFilteredData';
import type { IExchangeRate } from '../../models/exchangeRate.interface';
import './ChartTitle.css';

interface ChartTitleProps {
  data: IExchangeRate[];
}

// I could've used "options.title" with that chart library, but this way it's easier and more versatile to style
function ChartTitle({ data }: ChartTitleProps) {
  const { currency } = useCurrency();
  const filteredData: IExchangeRate[] = useFilteredData(data, currency);

  return (
    <h1 className="chartTitle__header">
      {filteredData[0].indicator.toUpperCase()}, {currency}/₽
    </h1>
  );
}

export default ChartTitle;
