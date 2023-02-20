const setWithExpiry=(key, value) =>{
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + 86400000,
  };
  localStorage.setItem(key, JSON.stringify(item));
}
const getWithExpiry=(key)=> {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
  }
}