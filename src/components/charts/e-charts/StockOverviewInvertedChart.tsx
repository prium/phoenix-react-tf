import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { getDates, rgbaColor } from 'helpers/utils';
import dayjs from 'dayjs';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { tooltipFormatterList } from 'helpers/echart-utils';

echarts.use([TooltipComponent, LineChart]);

const dates = getDates(
  new Date('8/1/2022'),
  new Date('8/20/2022'),
  1000 * 60 * 60 * 24
);

const getDefaultOptions = (
  getThemeColor: (name: string) => string,
  data: number[]
) => ({
  color: [getThemeColor('primary'), getThemeColor('info')],
  tooltip: {
    show: false,
    trigger: 'axis',
    padding: 10,
    backgroundColor: getThemeColor('body-highlight-bg'),
    borderColor: getThemeColor('border-color'),
    textStyle: { color: getThemeColor('light-text-emphasis') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    },
    formatter: tooltipFormatterList
  },
  xAxis: {
    type: 'category',
    data: dates,
    show: true,
    axisLabel: {
      formatter: (value: Date) => dayjs(value).format('DD MMM'),
      interval: 13,
      showMinLabel: true,
      showMaxLabel: false,
      color: getThemeColor('secondary-color'),
      align: 'left',
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8
    },
    axisLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        width: 1.5,
        color: getThemeColor('body-highlight-bg')
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    boundaryGap: false
  },
  yAxis: {
    show: false,
    value: data,
    boundaryGap: false
  },
  series: [
    {
      type: 'line',
      data,
      showSymbol: false,
      symbol: 'circle',
      smooth: false,
      hoverAnimation: true,
      itemStyle: {
        color: getThemeColor('body-highlight-bg'),
        borderColor: getThemeColor('danger'),
        borderWidth: 2
      },
      lineStyle: {
        color: getThemeColor('danger'),
        width: 1
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: rgbaColor(getThemeColor('danger'), 0.5)
            },
            {
              offset: 1,
              color: rgbaColor(getThemeColor('danger'), 0.05)
            }
          ]
        }
      }
    }
  ],
  grid: {
    right: '3%',
    left: '10%',
    bottom: '10%',
    top: '5%'
  }
});

const StockOverviewInvertedChart = ({ data }: { data: number[] }) => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor, data)}
      className="overview-echart"
    />
  );
};

export default StockOverviewInvertedChart;
