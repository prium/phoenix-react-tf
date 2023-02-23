import React, { createContext, Dispatch, PropsWithChildren, useEffect, useReducer } from 'react';
import { getItemFromStore } from 'helpers/utils';
import { Config, initialConfig } from 'config';
import { ACTIONTYPE, configReducer } from 'reducers/ConfigReducer';

interface AppContextInterFace {
  config: Config;
  configDispatch: Dispatch<ACTIONTYPE>;
  toggleTheme: () => void;
  setConfig: (payload: Partial<Config>) => void;
}

export const AppContext = createContext({} as AppContextInterFace);

const AppProvider = ({ children }: PropsWithChildren) => {
  const configState: Config = {
    isNavbarVerticalCollapsed: getItemFromStore(
      'isNavbarVerticalCollapsed',
      initialConfig.isNavbarVerticalCollapsed
    ),
    openNavbarVertical: initialConfig.openNavbarVertical,
    theme: getItemFromStore('theme', initialConfig.theme),
    navbarTopStyle: getItemFromStore('navbarTopStyle', initialConfig.navbarTopStyle),
    navbarVerticalStyle: getItemFromStore('navbarVerticalStyle', initialConfig.navbarVerticalStyle),
    navbarPosition: getItemFromStore('navbarPosition', initialConfig.navbarPosition),
    navbarTopShape: getItemFromStore('navbarTopShape', initialConfig.navbarTopShape),
    isRTL: getItemFromStore('isRTL', initialConfig.isRTL),
    showSettingPanel: initialConfig.showSettingPanel
  };

  const [config, configDispatch] = useReducer(configReducer, configState);

  const setConfig = (payload: Partial<Config>) => {
    configDispatch({
      type: 'SET_CONFIG',
      payload
    });
  };

  const toggleTheme = () => {
    configDispatch({
      type: 'SET_CONFIG',
      payload: {
        theme: config.theme === 'dark' ? 'light' : 'dark'
      }
    });
  };

  useEffect(() => {
    if (config.navbarTopShape === 'slim') {
      document.body.classList.add('nav-slim');
    } else {
      document.body.classList.remove('nav-slim');
    }
  }, [config]);

  return (
    <AppContext.Provider value={{ config, setConfig, toggleTheme, configDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
