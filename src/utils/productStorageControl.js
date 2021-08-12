import storage from 'utils/storage';
import { getFormatDate } from 'utils/format';

export const NO_INTERRESTED = "no_Interested";
export const WATCH = "watch";

export const  getDate = () => getFormatDate(new Date(), "YYYYMMDDHHMISS");

export const setLocalStorageProducts = (key, product) => {
  const storageData = getLocalStorageProducts(key);
  const findProduct = storageData.some((el) => el.id === product.id);

  const data = { ...product, date : getDate() };
  const items = storageData.map((el) => (el.id === product.id ? data : el));

  if (!findProduct) items.push(data);

  storage.set(key, items);
};

export const getLocalStorageProducts = (key) => {
  const resetDate = getDate();
  resetLocalStorageProducts(key, resetDate);
  return storage.get(key);
};

export const getFilterLocalStorageInterestedProducts = (products, product) => {
  const noInterestedProducts = getLocalStorageProducts(NO_INTERRESTED);
  if (product) noInterestedProducts.push(product);

  const noInterestedProductIdArrary = noInterestedProducts.map((el) => el.id);

  return products.filter((el) => !noInterestedProductIdArrary.includes(el.id));
};

export const getFilterLocalStroage = (key, item) => {
  const watchArr = getLocalStorageProducts(key).map((el) => el[item]);
  const result = new Set(watchArr);
  return [...result];
};

export const resetLocalStorageProducts = (key, date) => {
  const products = storage.get(key).filter(
    (el) => el.date.slice(0, 8) === date.slice(0, 8)
  );
  storage.set(key,products);
};