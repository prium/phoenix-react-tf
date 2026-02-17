import classNames from 'classnames';
import Button from 'components/base/Button';
import CheckButton from 'components/base/CheckButton';
import TaskPerformanceBarChart from 'components/charts/e-charts/TaskPerformanceBarChart';
import {
  ChartLegend,
  completedData,
  delayedData,
  inProgressData,
  xAxisLabel
} from 'data/project-management/stats';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { capitalize } from 'helpers/utils';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { ButtonGroup, Col, Row } from 'react-bootstrap';
import dayjs from 'dayjs';
import { useAppContext } from 'providers/AppProvider';
import { taskPerformanceTooltipFormatter } from 'helpers/echart-utils';
import { CallbackDataParams } from 'echarts/types/dist/shared';

type ScaleView = 'week' | 'month' | 'year';

const TaskPerformance = () => {
  const { getThemeColor } = useAppContext();
  const chartRef = useRef<null | EChartsReactCore>(null);
  const [scaleView, setScaleView] = useState<ScaleView>('week');
  const chartData = useMemo(
    () => ({
      completed: completedData[scaleView],
      inProgress: inProgressData[scaleView],
      delayed: delayedData[scaleView]
    }),
    [scaleView]
  );

  const [legends, setLegends] = useState<ChartLegend>({
    completed: true,
    'In Progress': true,
    delayed: true
  });

  const handleTaskStateClick = (value: keyof ChartLegend) => {
    setLegends({
      ...legends,
      [value]: !legends[value]
    });

    chartRef.current?.getEchartsInstance()?.dispatchAction({
      type: 'legendToggleSelect',
      name: capitalize(value)
    });
  };

  useEffect(() => {
    const data1 = chartData.completed || [];
    const data2 = chartData.inProgress || [];
    const data3 = chartData.delayed || [];
    const dataLength = Math.max(data1.length, data2.length, data3.length);
    const showDataZoom = dataLength > 12;

    if (dataLength === 0) return;

    chartRef?.current?.getEchartsInstance()?.setOption(
      {
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: getThemeColor('secondary-color'),
          borderColor: getThemeColor('border-color'),
          borderWidth: 0,
          formatter: (params: CallbackDataParams) =>
            taskPerformanceTooltipFormatter(params, scaleView)
        },
        dataZoom: showDataZoom
          ? [
              {
                type: 'slider',
                show: true,
                xAxisIndex: 0,
                bottom: 0,
                height: 10,
                start: 0,
                end: getDataZoomEnd(dataLength, 12),
                showDetail: false
              },
              {
                type: 'inside',
                show: true,
                xAxisIndex: 0,
                bottom: 0,
                height: 10,
                start: 0,
                end: getDataZoomEnd(dataLength, 12),
                showDetail: false
              }
            ]
          : [],
        xAxis: {
          type: 'category',
          axisLine: {
            show: true,
            lineStyle: {
              color: getThemeColor('border-color-translucent')
            }
          },
          ...getXAxisConfig(scaleView)
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
            data: data1
          },
          {
            name: 'In Progress',
            type: 'bar',
            stack: 'Total',
            barMaxWidth: 24,
            itemStyle: {
              color: getThemeColor('info-lighter')
            },
            data: data2
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
            data: data3
          }
        ],
        grid: {
          bottom: showDataZoom ? 25 : 10,
          top: '8%',
          left: 0,
          right: 7,
          outerBoundsMode: 'same',
          outerBoundsContain: 'axisLabel'
        }
      },
      {
        notMerge: false,
        lazyUpdate: true,
        replaceMerge: ['series', 'xAxis', 'yAxis', 'dataZoom']
      }
    );
  }, [chartData, scaleView, getThemeColor]);

  return (
    <div>
      <h3>Tasks Performance</h3>
      <p className="text-body-tertiary">
        Task status breakdown for the current period
      </p>
      <Row className="g-2 flex-between-center mb-3">
        <Col xs={12} sm="auto">
          <div className="d-flex gap-3">
            <Button
              className={classNames(
                'd-flex align-items-center p-0 shadow-none fw-normal',
                {
                  'opacity-50': !legends.completed
                }
              )}
              onClick={() => handleTaskStateClick('completed')}
            >
              <span
                className="bg-info-light me-2"
                style={{ height: 12, width: 12, borderRadius: 2 }}
              ></span>
              <span className="text-body-tertiary">Completed</span>
            </Button>
            <Button
              className={classNames(
                'd-flex align-items-center p-0 shadow-none fw-normal',
                {
                  'opacity-50': !legends['In Progress']
                }
              )}
              onClick={() => handleTaskStateClick('In Progress')}
            >
              <span
                className="bg-info-lighter me-2"
                style={{ height: 12, width: 12, borderRadius: 2 }}
              ></span>
              <span className="text-body-tertiary">In Progress</span>
            </Button>
            <Button
              className={classNames(
                'd-flex align-items-center p-0 shadow-none fw-normal',
                {
                  'opacity-50': !legends.delayed
                }
              )}
              onClick={() => handleTaskStateClick('delayed')}
            >
              <span
                className="bg-info-subtle me-2"
                style={{ height: 12, width: 12, borderRadius: 2 }}
              ></span>
              <span className="text-body-tertiary">Delayed</span>
            </Button>
          </div>
        </Col>
        <Col xs={12} sm="auto">
          <ButtonGroup>
            <CheckButton
              label="Week"
              id="week"
              inputProps={{
                name: 'scaleView',
                value: 'week',
                checked: scaleView === 'week',
                onChange(e: ChangeEvent<HTMLInputElement>) {
                  setScaleView(e.target.value as ScaleView);
                }
              }}
            />
            <CheckButton
              label="Month"
              id="month"
              inputProps={{
                name: 'scaleView',
                value: 'month',
                checked: scaleView === 'month',
                onChange(e: ChangeEvent<HTMLInputElement>) {
                  setScaleView(e.target.value as ScaleView);
                }
              }}
            />
            <CheckButton
              label="Year"
              id="year"
              inputProps={{
                name: 'scaleView',
                value: 'year',
                checked: scaleView === 'year',
                onChange(e: ChangeEvent<HTMLInputElement>) {
                  setScaleView(e.target.value as ScaleView);
                }
              }}
            />
          </ButtonGroup>
        </Col>
      </Row>
      <TaskPerformanceBarChart ref={chartRef} chartData={chartData} />
    </div>
  );
};

export default TaskPerformance;

const getXAxisConfig = (scaleView: ScaleView) => {
  if (scaleView === 'week') {
    return {
      data: xAxisLabel[0],
      axisLabel: {
        formatter: (value: string) => value
      }
    };
  }

  if (scaleView === 'year') {
    return {
      data: xAxisLabel[2],
      axisLabel: {
        formatter: (value: string) => dayjs(value).format('MMM')
      }
    };
  }

  return {
    data: xAxisLabel[1],
    axisLabel: {
      formatter: (value: string) => dayjs(value).format('D')
    }
  };
};

const getDataZoomEnd = (dataLength: number, visibleItems = 12) => {
  if (dataLength === 0) return 100;
  return (visibleItems / dataLength) * 100;
};
