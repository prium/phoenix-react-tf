export const getItemFromStore = (
  key: string,
  defaultValue?: string | boolean,
  store = localStorage
) => {
  try {
    return store.getItem(key) === null ? defaultValue : JSON.parse(store.getItem(key) as string);
  } catch {
    return store.getItem(key) || defaultValue;
  }
};

export const cleanText = (string: string) =>
  (string.charAt(0).toUpperCase() + string.slice(1)).replace(/-/g, ' ').replace('_and_', '&');

export const setItemToStore = (key: string, payload: string, store = localStorage) =>
  store.setItem(key, payload);

export const capitalize = (string: string) =>
  (string.charAt(0).toUpperCase() + string.slice(1)).replace(/-/g, ' ').replace('_and_', '&');

export const snakeCase = (string: string) => {
  return string
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('_');
};

export const getColor = (name: string) => {
  const dom = document.documentElement;
  return getComputedStyle(dom).getPropertyValue(`--phoenix-${name}`).trim();
};
