import type { IExchangeRateData } from '../../models/exchangeRate.interface';
import ReactECharts from '../Echarts';
import { useCurrency } from '../../hooks/useCurrency';
import type { CSSProperties } from 'react';
import { useFilteredData } from '../../hooks/useFilteredData';

interface ExchangeRatesChartProps {
  data: IExchangeRateData[];
  style?: CSSProperties;
}

function ExchangeRatesChart({ data, style }: ExchangeRatesChartProps) {
  const { currency } = useCurrency();
  const filteredData: IExchangeRateData[] = useFilteredData(data, currency);
  const filteredDataByValues = filteredData.map((item) => item.value);

  // Since the given component's type is "any"
  const options: any = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      },
    },
    xAxis: {
      data: filteredData.map((item) => item.month),
    },
    yAxis: {
      min: Math.min(...filteredDataByValues),
      max: Math.max(...filteredDataByValues),
    },
    series: [
      {
        name: filteredData[0].indicator,
        type: 'line',
        data: filteredDataByValues,
        itemStyle: { color: '#F38B00' },
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
              minHeight: '370px',
              maxWidth: '1000px',
            }
      }
    />
  );
}

export default ExchangeRatesChart;
