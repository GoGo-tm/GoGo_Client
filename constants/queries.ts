enum QueryKeys {
  WEATHER_KEY = 'WEATHER',
  HIKING_TRAILS_QUERY_KEY = 'HIKING_TRAILS_QUERY',
  MYLOGS_SEARCH_QUERY_KEY = 'MYLOGS_SEARCH_QUERY_KEY',
  MYLOGS_KEY = 'MYLOGS_KEY',
}

export const myLogKeys = {
  all: ['MYLOGS', 'MYLOG'],
  lists: () => [...myLogKeys.all, 'LIST'],
};

export default QueryKeys;
