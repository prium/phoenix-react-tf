export type ThemeVariant = 'light' | 'dark';
export type NavPositionVariant = 'horizontal' | 'vertical' | 'combo' | 'dual';
export type NavTopShapeVariant = 'default' | 'slim';
export type NavbarAppearanceVariant = 'default' | 'darker';
export interface Config {
  isNavbarVerticalCollapsed: boolean;
  openNavbarVertical: boolean;
  theme: ThemeVariant;
  navbarVerticalAppearance: NavbarAppearanceVariant;
  navbarTopAppearance: NavbarAppearanceVariant;
  navbarPosition: NavPositionVariant;
  navbarTopShape: NavTopShapeVariant;
  isRTL: boolean;
  showSettingPanel: boolean;
  bodyClass?: string;
  disableNavigationType: boolean;
  disableVerticalNavbarAppearance: boolean;
  disableHorizontalNavbarShape: boolean;
  disableHorizontalNavbarAppearance: boolean;
}

export const initialConfig: Config = {
  isNavbarVerticalCollapsed: false,
  openNavbarVertical: false, // for responsive
  theme: 'light',
  navbarTopAppearance: 'default',
  navbarVerticalAppearance: 'default',
  navbarPosition: 'vertical',
  navbarTopShape: 'default',
  isRTL: false,
  showSettingPanel: false,
  disableNavigationType: false,
  disableVerticalNavbarAppearance: false,
  disableHorizontalNavbarShape: false,
  disableHorizontalNavbarAppearance: false
};
