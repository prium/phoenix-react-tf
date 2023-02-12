import { Config } from 'config';
import { setItemToStore } from 'helpers/utils';

export type ACTIONTYPE =
  | { type: 'SET_CONFIG'; payload: Partial<Config> }
  | { type: 'REFRESH' }
  | { type: 'RESET' };

export const configReducer = (state: Config, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'SET_CONFIG':
      const { payload } = action;
      Object.keys(payload).forEach((key: string) => {
        if (
          [
            'isFluid',
            'isRTL',
            'isDark',
            'navbarPosition',
            'isNavbarVerticalCollapsed',
            'navbarStyle'
          ].includes(key)
        ) {
          setItemToStore(key, String(payload[key as keyof Config]));
        }
      });
      return {
        ...state,
        ...payload
      };
    case 'REFRESH':
      return {
        ...state
      };
    case 'RESET':
      localStorage.clear();
      return {
        ...state
        // ...settings
      };
    default:
      return state;
  }
};
