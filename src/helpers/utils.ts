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

/* get Dates between */
export const getDates = (
  startDate: Date,
  endDate: Date,
  interval: number = 1000 * 60 * 60 * 24
): Date[] => {
  const duration = +endDate - +startDate;
  const steps = duration / interval;
  return Array.from({ length: steps + 1 }, (v, i) => new Date(startDate.valueOf() + interval * i));
};

export const getPastDates = (duration: 'week' | 'month' | 'year' | number): Date[] => {
  let days;

  switch (duration) {
    case 'week':
      days = 7;
      break;
    case 'month':
      days = 30;
      break;
    case 'year':
      days = 365;
      break;

    default:
      days = duration;
  }

  const date = new Date();
  const endDate = date;
  const startDate = new Date(new Date().setDate(date.getDate() - (days - 1)));
  return getDates(startDate, endDate);
};
