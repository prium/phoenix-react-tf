import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent, DataZoomComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { CSSProperties, RefObject, useMemo } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { xAxisLabel } from 'data/project-management/stats';
import { taskPerformanceTooltipFormatter } from 'helpers/echart-utils';

echarts.use([TooltipComponent, DataZoomComponent, BarChart]);

interface ChartData {
  completed: any;
  inProgress: any;
  delayed: any;
}

interface TaskPerformanceBarChartProps {
  chartData: ChartData;
  style?: CSSProperties;
  ref: RefObject<EChartsReactCore | null>;
}

const TaskPerformanceBarChart = ({
  chartData,
  ref,
  style
}: TaskPerformanceBarChartProps) => {
  const { getThemeColor } = useAppContext();

  const chartRef = ref as RefObject<EChartsReactCore | null>;

  const getDefaultOptions = useMemo(
    () => ({
      color: [
        getThemeColor('info-light'),
        getThemeColor('info-lighter'),
        getThemeColor('info-bg-subtle')
      ],
      legend: {
        show: false,
        data: ['Completed', 'In Progress', 'Delayed']
      },
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: getThemeColor('secondary-color'),
        borderColor: getThemeColor('border-color'),
        borderWidth: 0,
        formatter: (params: CallbackDataParams) =>
          taskPerformanceTooltipFormatter(params, 'week')
      },
      xAxis: {
        type: 'category',
        data: xAxisLabel[0],
        axisLine: {
          show: true,
          lineStyle: {
            color: getThemeColor('border-color-translucent')
          }
        },
        axisLabel: {
          show: true,
          itemStyle: {
            color: getThemeColor('tertiary-color')
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisLabel: {
          show: true,
          itemStyle: {
            color: getThemeColor('secondary-color')
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: getThemeColor('border-color-translucent')
          }
        }
      },
      series: [
        {
          name: 'Completed',
          type: 'bar',
          stack: 'Total',
          barMaxWidth: 24,
          itemStyle: {
            color: getThemeColor('info-light')
          },
          data: chartData.completed
        },
        {
          name: 'In Progress',
          type: 'bar',
          stack: 'Total',
          barMaxWidth: 24,
          itemStyle: {
            color: getThemeColor('info-lighter')
          },
          data: chartData.inProgress
        },
        {
          name: 'Delayed',
          type: 'bar',
          stack: 'Total',
          barMaxWidth: 24,
          itemStyle: {
            color: getThemeColor('info-bg-subtle'),
            barBorderRadius: [4, 4, 0, 0]
          },
          data: chartData.delayed
        }
      ],
      grid: {
        top: '8%',
        bottom: 10,
        left: 0,
        right: 7,
        outerBoundsMode: 'same',
        outerBoundsContain: 'axisLabel'
      },
      animationDurationUpdate: 600,
      animationEasingUpdate: 'cubicOut'
    }),
    [getThemeColor, chartData]
  );
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions}
      ref={chartRef}
      style={style}
    />
  );
};

export default TaskPerformanceBarChart;
