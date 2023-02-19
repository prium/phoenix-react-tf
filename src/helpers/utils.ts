export const getItemFromStore = (
  key: string,
  defaultValue?: string | boolean,
  store = localStorage
) => {
  try {
    if (store.getItem(key)) {
      return JSON.parse(store.getItem(key) as string);
    }
  } catch {
    return store.getItem(key) || defaultValue;
  }
};

export const cleanText = (string: string) =>
  (string.charAt(0).toUpperCase() + string.slice(1)).replace(/-/g, ' ').replace('_and_', '&');

export const setItemToStore = (key: string, payload: string, store = localStorage) =>
  store.setItem(key, payload);
