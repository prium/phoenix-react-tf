import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import GanttChartActions from 'components/modules/gantt/GanttActions';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { useEffect, useRef, useState } from 'react';
import { ganttData as tasks } from 'data/ganttData';
import { ganttConfigColumnsData, taskTextHandler } from 'components/modules/gantt/layoutConfig';
import GanttOffcanvas from 'components/modules/gantt/GanttOffcanvas';
import GanttDeleteLinkModal from 'components/modules/gantt/GanttDeleteLinkModal';
import GanttResponsive from 'components/modules/gantt/GanttResponsive';
import { useAppContext } from 'providers/AppProvider';

const weekScaleTemplate = (date: Date): string => {
  const dateToStr = gantt.date.date_to_str('%M %d');
  const endDate = gantt.date.add(date, 7 - date.getDay(), 'day');
  return `${dateToStr(date)} - ${dateToStr(endDate)}`;
};

const Views = {
  DAYS: 'days',
  WEEKS: 'weeks',
  MONTHS: 'months',
  YEARS: 'years'
};

export type ViewType = (typeof Views)[keyof typeof Views]; // 'days' | 'weeks' | 'months' | 'years'
export type ViewKey = keyof typeof Views; // 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const scales: Record<ViewType, any> = {
  days: [
    { unit: 'week', step: 1, format: '%W' },
    { unit: 'day', step: 1, format: '%d %M' }
  ],
  weeks: [
    { unit: 'month', step: 1, format: '%F' },
    {
      unit: 'week',
      step: 1,
      format: weekScaleTemplate
    }
  ],
  months: [
    { unit: 'year', step: 1, format: '%Y' },
    { unit: 'month', step: 1, format: '%F' }
  ],
  years: [
    {
      unit: 'year',
      step: 3,
      format: (date: Date) => {
        const dateToStr = gantt.date.date_to_str('%Y');
        const endDate = gantt.date.add(date, 3, 'year');
        return `${dateToStr(date)} - ${dateToStr(endDate)}`;
      }
    },
    { unit: 'year', step: 1, format: '%Y' }
  ]
};

const GanttChart = () => {
  const { setContentClass } = useMainLayoutContext();
  const {
    config: { isRTL }
  } = useAppContext();
  const containerRef = useRef(null);
  const [currentView, setCurrentView] = useState<ViewType>(Views.MONTHS);

  useEffect(() => {
    setContentClass('gantt-content');
    return () => {
      setContentClass('');
    };
  }, [setContentClass]);

  useEffect(() => {
    if (containerRef.current) {
      gantt.clearAll();
      gantt.plugins({});
      gantt.config.scales = scales[currentView];
      gantt.config.row_height = 48; // Adjust task row height
      gantt.config.scale_height = 70;
      gantt.config.bar_height = 16;
      gantt.config.sort = true;
      gantt.config.grid_resizer = true;
      gantt.config.min_column_width = 130; // Increase the minimum width of each cell
      gantt.config.columns = ganttConfigColumnsData;
      gantt.config.rtl = false;

      const gridWidth = 518;

      // --------- configure layout start ----------
      const gridConfig = {
        width: gridWidth,
        rows: [
          {
            view: 'grid',
            scrollX: 'gridScroll',
            scrollable: true,
            scrollY: 'scrollVer'
          },
          { view: 'scrollbar', id: 'gridScroll' }
        ]
      };

      const timelineConfig = {
        rows: [
          { view: 'timeline', scrollX: 'scrollHor', scrollY: 'scrollVer' },
          { view: 'scrollbar', id: 'scrollHor' }
        ]
      };

      const scrollbarConfig = { view: 'scrollbar', id: 'scrollVer' };
      const resizerConfig = { resizer: true, width: 1 };

      gantt.config.layout = {
        css: 'gantt_container',
        cols: [gridConfig, resizerConfig, timelineConfig, scrollbarConfig]
      };

      if (isRTL) {
        gantt.config.rtl = true;
        gantt.config.layout = {
          css: 'gantt_container',
          cols: [scrollbarConfig, timelineConfig, resizerConfig, gridConfig]
        };
      }

      // --------- configure layout end ----------
      taskTextHandler(isRTL);
      gantt.config.scroll_size = 7;
      gantt.init(containerRef.current);
      gantt.parse(tasks);

      // ---------- add a custom class to header ------------------
      gantt.templates.grid_header_class = columnName => {
        if (columnName === 'assignee') {
          return 'sort-btn-none';
        }
        return '';
      };
    }
    return () => {
      gantt.clearAll(); // Clear tasks and links
    };
  }, []);

  useEffect(() => {
    gantt.config.scales = scales[currentView];
    gantt.render();
  }, [currentView]);

  return (
    <>
      <GanttChartActions setCurrentView={setCurrentView} />
      <div className="gantt-app-container">
        <div
          id="gantt-app"
          ref={containerRef}
          style={{ width: '100%', minHeight: '100%' }}
        />
      </div>
      <GanttOffcanvas />
      <GanttDeleteLinkModal />
      <GanttResponsive />
    </>
  );
};

export default GanttChart;
