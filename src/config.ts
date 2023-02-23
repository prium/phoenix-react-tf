export interface Config {
  isNavbarVerticalCollapsed: boolean;
  openNavbarVertical: boolean;
  theme: 'light' | 'dark';
  navbarTopStyle: string;
  navbarVerticalStyle: string;
  navbarPosition: 'horizontal' | 'vertical';
  navbarTopShape: 'default' | 'slim';
  isRTL: boolean;
  showSettingPanel: boolean;
  bodyClass?: string;
}

export const initialConfig: Config = {
  isNavbarVerticalCollapsed: false,
  openNavbarVertical: false, // for responsive
  theme: 'light',
  navbarTopStyle: 'default',
  navbarVerticalStyle: 'default',
  navbarPosition: 'vertical',
  navbarTopShape: 'default',
  isRTL: false,
  showSettingPanel: false
};
