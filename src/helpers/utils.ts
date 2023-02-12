export const getItemFromStore = (
  key: string,
  defaultValue?: string | boolean,
  store = localStorage
) => {
  try {
    if (store.getItem(key)) {
      return JSON.parse(store.getItem('key') as string);
    }
  } catch {
    return store.getItem(key) || defaultValue;
  }
};

export const setItemToStore = (key: string, payload: string, store = localStorage) =>
  store.setItem(key, payload);
