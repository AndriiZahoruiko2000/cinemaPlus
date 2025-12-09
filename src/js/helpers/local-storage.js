export function saveToLs(key, value) {
  const JSONData = JSON.stringify(value);
  localStorage.setItem(key, JSONData);
}

export function loadFromLs(key) {
  const loadData = localStorage.getItem(key);
  try {
    const parsedData = JSON.parse(loadData);
    return parsedData;
  } catch {
    return loadData;
  }
}
