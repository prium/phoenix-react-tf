import React, {
  CSSProperties,
  MutableRefObject,
  forwardRef,
  useEffect
} from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { tooltipFormatterList } from 'helpers/echart-utils';
import EChartsReactCore from 'echarts-for-react/lib/core';
echarts.use([TooltipComponent, BarChart]);

const profitData = [
  [350000, 390000, 410700, 450000, 390000, 410700],
  [245000, 310000, 420000, 480000, 530000, 580000],
  [278450, 513220, 359890, 444567, 201345, 589000]
];
const revenueData = [
  [-810000, -640000, -630000, -590000, -620000, -780000],
  [-482310, -726590, -589120, -674832, -811245, -455678],
  [-432567, -688921, -517389, -759234, -601876, -485112]
];
const expansesData = [
  [-450000, -250000, -200000, -120000, -230000, -270000],
  [-243567, -156789, -398234, -120456, -321890, -465678],
  [-235678, -142345, -398765, -287456, -173890, -451234]
];

const getDefaultOptions = (
  getThemeColor: (name: string) => string,
  isDark: boolean
) => ({
  color: [getThemeColor('primary'), getThemeColor('tertiary-bg')],
  tooltip: {
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
  legend: {
    data: ['Profit', 'Revenue', 'Expanses'],
    show: false
  },

  xAxis: {
    axisLabel: {
      show: true,
      margin: 12,
      color: getThemeColor('secondary-text-emphasis'),
      formatter: (value: number) =>
        `${Math.abs(Math.round((value / 1000) * 10) / 10)}k`,
      fontFamily: 'Nunito Sans',
      fontWeight: 700
    },
    splitLine: {
      lineStyle: {
        color: getThemeColor('border-color-translucent')
      }
    }
  },

  yAxis: {
    axisTick: {
      show: false
    },
    data: ['NOV-DEC', 'SEP-OCT', 'JUL-AUG', 'MAY-JUN', 'MAR-APR', 'JAN-FEB'],
    axisLabel: {
      color: getThemeColor('secondary-text-emphasis'),
      margin: 8,
      fontFamily: 'Nunito Sans',
      fontWeight: 700
    },
    axisLine: {
      lineStyle: {
        color: getThemeColor('border-color-translucent')
      }
    }
  },
  series: [
    {
      name: 'Profit',
      stack: 'Total',
      type: 'bar',
      barWidth: 8,
      roundCap: true,
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        borderRadius: [0, 4, 4, 0],
        color: isDark
          ? getThemeColor('primary')
          : getThemeColor('primary-light')
      },
      data: profitData[0]
    },
    {
      name: 'Revenue',
      type: 'bar',
      barWidth: 8,
      barGap: '100%',
      stack: 'Total',
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        borderRadius: [4, 0, 0, 4],
        color: isDark
          ? getThemeColor('success')
          : getThemeColor('success-light')
      },
      data: revenueData[0]
    },
    {
      name: 'Expanses',
      type: 'bar',
      barWidth: 8,
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        borderRadius: [4, 0, 0, 4],
        color: isDark ? getThemeColor('info') : getThemeColor('info-light')
      },
      data: expansesData[0]
    }
  ],
  grid: {
    right: 20,
    left: 3,
    bottom: 0,
    top: 16,
    containLabel: true
  },
  animation: false
});

const FinalcialActivitiesChart = forwardRef<
  EChartsReactCore | null,
  { style: CSSProperties }
>(({ style }, ref) => {
  const {
    getThemeColor,
    config: { isDark }
  } = useAppContext();

  const chartRef = ref as MutableRefObject<EChartsReactCore | null>;

  const updateDimensions = () => {
    if (window.innerWidth < 576) {
      chartRef?.current?.getEchartsInstance().setOption({
        yAxis: {
          axisLabel: {
            show: false
          }
        },
        grid: {
          left: 15
        }
      });
    } else if (window.innerWidth < 768) {
      chartRef.current?.getEchartsInstance().setOption({
        yAxis: {
          axisLabel: {
            margin: 32,
            show: true
          }
        },
        grid: {
          left: 3
        }
      });
    } else if (window.innerWidth < 992) {
      chartRef.current?.getEchartsInstance().setOption({
        yAxis: {
          axisLabel: {
            show: false
          }
        },
        grid: {
          left: 15
        }
      });
    } else if (window.innerWidth > 992) {
      chartRef.current?.getEchartsInstance().setOption({
        yAxis: {
          axisLabel: {
            show: true
          }
        },
        grid: {
          left: 3
        }
      });
    }
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  useEffect(() => {
    if (chartRef.current) {
      updateDimensions();
    }
  }, [chartRef]);

  return (
    <ReactEChartsCore
      echarts={echarts}
      ref={chartRef}
      option={getDefaultOptions(getThemeColor, isDark)}
      style={style}
    />
  );
});

export default FinalcialActivitiesChart;
