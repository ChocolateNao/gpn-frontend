import { useCurrency } from '../../hooks/useCurrency';
import { useFilteredData } from '../../hooks/useFilteredData';
import type { IExchangeRate } from '../../models/exchangeRate.interface';
import './AvgRate.css';

interface AvgRateProps {
  data: IExchangeRate[];
}

function AvgRate({ data }: AvgRateProps) {
  const { currency } = useCurrency();
  const filteredData: IExchangeRate[] = useFilteredData(data, currency);

  const sumRate: number = filteredData.reduce((acc, cur) => {
    acc += cur.value;
    return acc;
  }, 0);

  return (
    <div className="avgRate__container">
      <h2 className="avgRate__header">Среднее за период</h2>
      <p className="avgRate__textBottom">
        <span className="avgRate__value">
          {(sumRate / filteredData.length).toFixed(1)}
        </span>{' '}
        <span className="avgRate__currency">₽</span>
      </p>
    </div>
  );
}

export default AvgRate;
