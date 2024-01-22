import { CSSProperties } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { ThemeVariant } from 'config';
import { sellersReportData } from 'data/crm/reportsData';
import { tooltipFormatterDefault } from 'helpers/echart-utils';
import { CallbackDataParams } from 'echarts/types/dist/shared';

echarts.use([TooltipComponent, BarChart]);

const getDefaultOptions = (
  getThemeColor: (name: string) => string,
  theme: ThemeVariant
) => ({
  color: [getThemeColor('primary-200'), getThemeColor('info-300')],
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getThemeColor('body-highlight-bg'),
    borderColor: getThemeColor('gray-300'),
    textStyle: { color: getThemeColor('light-text-emphasis') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    },
    formatter: (params: CallbackDataParams[]) =>
      tooltipFormatterDefault(params, 'MMM DD, YYYY', 'color')
  },
  xAxis: {
    type: 'category',
    data: sellersReportData.map(data => data.reportStage),
    axisLabel: {
      color: getThemeColor('body-color'),
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8,
      rotate: 30,
      formatter: (value: string) => `${value.slice(0, 5)}...`
    },
    axisLine: {
      lineStyle: {
        color: getThemeColor('secondary-bg')
      }
    },
    axisTick: false
  },
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        color: getThemeColor('secondary-bg')
      }
    },
    axisLabel: {
      color: getThemeColor('body-color'),
      fontFamily: 'Nunito Sans',
      fontWeight: 700,
      fontSize: 12.8,
      margin: 24,
      formatter: (value: string) => `${value}%`
    }
  },
  series: [
    {
      name: 'Revenue',
      type: 'bar',
      barWidth: '32px',
      barGap: '48%',
      showBackground: true,
      backgroundStyle: {
        color:
          theme === 'light'
            ? getThemeColor('primary-soft')
            : getThemeColor('body-highlight-bg')
      },
      label: {
        show: false
      },
      itemStyle: {
        color:
          theme === 'light'
            ? getThemeColor('primary-300')
            : getThemeColor('primary')
      },
      data: sellersReportData.map(data => data.totalCount)
    }
  ],
  grid: {
    right: '0',
    left: '0',
    bottom: 0,
    top: 10,
    containLabel: true
  },
  animation: false
});

const ReportDetailsChart = ({ style }: { style: CSSProperties }) => {
  const {
    config: { theme },
    getThemeColor
  } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor, theme)}
      style={style}
    />
  );
};

export default ReportDetailsChart;
