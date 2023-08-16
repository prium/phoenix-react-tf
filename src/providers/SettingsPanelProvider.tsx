import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState
} from 'react';

export interface SettingsPanelConfig {
  showSettingPanelButton: boolean;
  openSettingPanel: boolean;
  disableNavigationType: boolean;
  disableVerticalNavbarAppearance: boolean;
  disableHorizontalNavbarShape: boolean;
  disableHorizontalNavbarAppearance: boolean;
  disableResetButton: boolean;
}

interface SettingsPanelContextInterFace {
  settingsPanelConfig: SettingsPanelConfig;
  setSettingsPanelConfig: (config: Partial<SettingsPanelConfig>) => void;
}

export const SettingsPanelContext = createContext(
  {} as SettingsPanelContextInterFace
);

const SettingsPanelProvider = ({ children }: PropsWithChildren) => {
  const [settingsPanelConfig, setSettingsPanelConfig] =
    useState<SettingsPanelConfig>({
      showSettingPanelButton: true,
      openSettingPanel: false,
      disableNavigationType: false,
      disableVerticalNavbarAppearance: false,
      disableHorizontalNavbarShape: false,
      disableHorizontalNavbarAppearance: false,
      disableResetButton: false
    });

  const updateSettingsPanelConfig = (config: Partial<SettingsPanelConfig>) => {
    setSettingsPanelConfig({
      ...settingsPanelConfig,
      ...config
    });
  };

  return (
    <SettingsPanelContext.Provider
      value={{
        settingsPanelConfig,
        setSettingsPanelConfig: updateSettingsPanelConfig
      }}
    >
      {children}
    </SettingsPanelContext.Provider>
  );
};

export default SettingsPanelProvider;

export const useSettingsPanelContext = () => useContext(SettingsPanelContext);
