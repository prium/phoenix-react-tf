import { AppContext } from 'providers/AppProvider';
import { useContext, useEffect, useState } from 'react';

const useToggleStyle = () => {
  const [isStylesheetLoaded, setIsStylesheetLoaded] = useState(false);
  const {
    config: { theme, isRTL }
  } = useContext(AppContext);

  useEffect(() => {
    setIsStylesheetLoaded(false);
    Array.from(document.getElementsByClassName('theme-stylesheet')).forEach(link => link.remove());
    const link = document.createElement('link');
    link.href = `${process.env.PUBLIC_URL}/css/theme.min${isRTL ? '.rtl' : ''}.css`;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.className = 'theme-stylesheet';

    const userLink = document.createElement('link');
    userLink.href = `${process.env.PUBLIC_URL}/css/user${isRTL ? '.rtl' : ''}.min.css`;
    userLink.type = 'text/css';
    userLink.rel = 'stylesheet';
    userLink.className = 'theme-stylesheet';

    link.onload = () => {
      setIsStylesheetLoaded(true);
    };

    document.head.appendChild(link);
    document.head.appendChild(userLink);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  }, [isRTL]);

  useEffect(() => {
    document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
  }, [theme]);

  return { isStylesheetLoaded };
};

export default useToggleStyle;
