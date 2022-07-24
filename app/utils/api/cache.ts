import LRU from "lru-cache";

const options: LRU.Options<unknown, unknown> = {
  max: 1000,
  ttl: 1000 * 60 * 60 * 3,
};

const cache = new LRU(options);

const getCache = (query: string) => {
  const cacheData = cache.get(query);
  return cacheData;
};

const setCache = (query: string, data: any) => {
  cache.set(query, data);
};

export { getCache, setCache };
