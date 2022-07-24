const getLocalStorageData = (key: string) => {
  const data = localStorage[key];
  if (data) return JSON.parse(data);
  return null;
};

const setLocalStorageData = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { getLocalStorageData, setLocalStorageData };
