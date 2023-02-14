export interface Config {
  isNavbarVerticalCollapsed: boolean;
  theme: 'light' | 'dark';
  navbarTopStyle: string;
  navbarVerticalStyle: string;
  navbarPosition: string;
  navbarTopShape: string;
  isRTL: boolean;
}

export const initialConfig: Config = {
  isNavbarVerticalCollapsed: false,
  theme: 'light',
  navbarTopStyle: 'default',
  navbarVerticalStyle: 'default',
  navbarPosition: 'vertical',
  navbarTopShape: 'default',
  isRTL: false
};
