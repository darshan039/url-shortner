import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "./utility.js";

import { nanoid } from "nanoid";

const SHORT_URL_KEY = "SHORT_URLS";

export const getShortUrls = () => {
  return getLocalStorage(SHORT_URL_KEY) || [];
};

export const postShortUrls = async (longUrl) => {
  const shortUrlObj = { longUrl, shortUrl: await nanoid(10) };
  const shortUrlList = getLocalStorage(SHORT_URL_KEY) || [];
  shortUrlList.push(shortUrlObj);
  setLocalStorage(SHORT_URL_KEY, shortUrlList);
  return true;
};

export const clearShortUrls = async () => {
  removeLocalStorage(SHORT_URL_KEY);
  return true;
};
