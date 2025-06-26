import { useEffect } from 'react';
import { gantt } from 'dhtmlx-gantt';

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const gridWidth = 500;

const GanttResponsive = () => {
  useEffect(() => {
    const handleResize = () => {
      if (!gantt?.$root || !gantt?.config?.layout) return;

      gantt.$root.style.width = '100%';

      const { cols } = gantt.config.layout;
      // const gridBox = cols.find(item => item.rows?.[0]?.view === 'grid') || {};
      const gridBox =
        cols.find(
          (item: { rows?: { view?: string }[] }) =>
            item.rows?.[0]?.view === 'grid'
        ) || {};

      if (window.innerWidth <= breakpoints.sm) {
        gridBox.width = 200;
      } else if (window.innerWidth <= breakpoints.md) {
        gridBox.width = 280;
      } else if (window.innerWidth <= breakpoints.lg) {
        gridBox.width = 300;
      } else if (window.innerWidth <= breakpoints.xl) {
        gridBox.width = 420;
      } else {
        gridBox.width = gridWidth;
      }

      gantt.init('gantt-app');
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
};

export default GanttResponsive;
