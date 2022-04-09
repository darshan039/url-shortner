import { LocalStorage } from "node-localstorage";

const localStorage = new LocalStorage("./urlShortner");

export const getLocalStorage = (key) => {
  const itemStr = localStorage.getItem(key);
  return JSON.parse(itemStr);
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
