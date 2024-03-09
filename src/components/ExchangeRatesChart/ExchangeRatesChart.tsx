import type { IExchangeRate } from '../../models/exchangeRate.interface';
import ReactECharts from '../Echarts';
import { useCurrency } from '../../hooks/useCurrency';
import type { CSSProperties } from 'react';
import { useFilteredData } from '../../hooks/useFilteredData';

interface ExchangeRatesChartProps {
  data: IExchangeRate[];
  style?: CSSProperties;
}

function ExchangeRatesChart({ data, style }: ExchangeRatesChartProps) {
  const { currency } = useCurrency();
  const filteredData: IExchangeRate[] = useFilteredData(data, currency);

  // Since the given component's type is "any"
  const options: any = {
    tooltip: {},
    xAxis: {
      data: filteredData.map((item) => item.month),
    },
    yAxis: {},
    series: [
      {
        name: filteredData[0].indicator,
        type: 'line',
        data: filteredData.map((item) => item.value),
      },
    ],
  };

  return (
    <ReactECharts
      option={options}
      style={
        style
          ? style
          : {
              maxHeight: '370px',
              maxWidth: '1000px',
            }
      }
    />
  );
}

export default ExchangeRatesChart;
