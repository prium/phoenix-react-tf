import { router } from 'Routes';
import SettingsPanel from 'components/settings-panel/SettingsPanel';
import SettingsToggle from 'components/settings-panel/SettingsToggle';
import useToggleStyle from 'hooks/useToggleStyle';
import { useAppContext } from 'providers/AppProvider';
import { useSettingsPanelContext } from 'providers/SettingsPanelProvider';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  const { isStylesheetLoaded } = useToggleStyle();

  const {
    settingsPanelConfig: { showSettingPanelButton }
  } = useSettingsPanelContext();

  const {
    config: { theme }
  } = useAppContext();

  if (!isStylesheetLoaded) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: theme === 'dark' ? '#000' : '#fff'
        }}
      />
    );
  }

  return (
    <>
      <RouterProvider router={router} />
      {showSettingPanelButton && (
        <>
          <SettingsToggle />
          <SettingsPanel />
        </>
      )}
    </>
  );
};

export default App;
