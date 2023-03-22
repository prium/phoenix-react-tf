import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { getColor, getDates } from 'helpers/utils';
import dayjs from 'dayjs';
import { useAppContext } from 'providers/AppProvider';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { ThemeVariant } from 'config';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent
]);

const dates = getDates(new Date('5/1/2022'), new Date('5/30/2022'), 1000 * 60 * 60 * 24);

const currentMonthData = [
  100, 200, 300, 300, 300, 250, 200, 200, 200, 200, 200, 500, 500, 500, 600, 700, 800, 900, 1000,
  1100, 850, 600, 600, 600, 400, 200, 200, 300, 300, 300
];

const prevMonthData = [
  200, 200, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 200, 400, 600, 600, 600, 800, 1000,
  700, 400, 450, 500, 600, 700, 650, 600, 550
];

const tooltipFormatter = (params: CallbackDataParams[]) => {
  const currentDate = dayjs(params[0].name);
  const prevDate = dayjs(params[0].name).subtract(1, 'month');

  const result = params.map((param, index) => ({
    value: param.value,
    date: index > 0 ? prevDate : currentDate,
    color: param.color
  }));

  let tooltipItem = ``;
  result.forEach((el: any, index: number) => {
    tooltipItem += `<h6 class="fs--1 text-700 ${
      index > 0 && 'mb-0'
    }"><span class="d-inline-block rounded-circle me-2" style="height: 0.625rem; width: 0.625rem; background:${
      el.color
    }"></span>
    ${el.date.format('MMM DD')} : ${el.value}
  </h6>`;
  });
  return `<div class='ms-1'>
            ${tooltipItem}
          </div>`;
};

const getDefaultOptions = (theme: ThemeVariant) => ({
  color: [getColor('primary'), getColor('info')],
  tooltip: {
    trigger: 'axis',
    padding: 10,
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    },
    formatter: tooltipFormatter
  },
  xAxis: [
    {
      type: 'category',
      data: dates,
      axisLabel: {
        formatter: (value: Date) => dayjs(value).format('DD MMM'),
        interval: 13,
        showMinLabel: true,
        showMaxLabel: false,
        color: getColor('gray-800'),
        align: 'left',
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        fontSize: 12.8
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: getColor('gray-200')
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        interval: 0,
        lineStyle: {
          color: theme === 'dark' ? getColor('gray-100') : getColor('gray-200')
        }
      },
      boundaryGap: false
    },
    {
      type: 'category',
      position: 'bottom',
      data: dates,
      axisLabel: {
        formatter: (value: Date) => dayjs(value).format('DD MMM'),
        interval: 130,
        showMaxLabel: true,
        showMinLabel: false,
        color: getColor('gray-800'),
        align: 'right',
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        fontSize: 12.8
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      boundaryGap: false
    }
  ],
  yAxis: {
    position: 'right',
    axisPointer: { type: 'none' },
    axisTick: 'none',
    splitLine: {
      show: false
    },
    axisLine: { show: false },
    axisLabel: { show: false }
  },
  series: [
    {
      type: 'line',
      data: currentMonthData,
      showSymbol: false,
      symbol: 'circle'
    },
    {
      type: 'line',
      data: prevMonthData,
      lineStyle: {
        type: 'dashed',
        width: 1,
        color: getColor('info')
      },
      showSymbol: false,
      symbol: 'circle'
    }
  ],
  grid: {
    right: 2,
    left: 5,
    bottom: '20px',
    top: '2%',
    containLabel: false
  },
  animation: false
});

const TotalSellsChart = () => {
  const {
    config: { theme }
  } = useAppContext();

  return <ReactEChartsCore echarts={echarts} option={getDefaultOptions(theme)} />;
};

export default TotalSellsChart;
