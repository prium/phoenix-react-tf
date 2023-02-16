import { AppContext } from 'providers/AppProvider';
import { useContext, useEffect } from 'react';

const useToggleStyle = () => {
  const {
    config: { theme }
  } = useContext(AppContext);

  useEffect(() => {
    document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
  }, [theme]);
};

export default useToggleStyle;
