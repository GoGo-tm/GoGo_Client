import dayjs from 'dayjs';

import { PTY_CONTENTS, PTY_NULL_TYPE, SKY_CONTENTS } from '~/constants/weather';

const isBaseTime = ['02', '05', '08', '11', '14', '17', '20', '23'];
const isBaseTimePlus1Hour = ['03', '06', '09', '12', '15', '18', '21', '00'];
const isBaseTimePlus2Hour = ['04', '07', '10', '13', '16', '19', '22', '01'];
const isEdgeTime = ['23', '00', '01'];

interface Item {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}

const getCurrentTime = () => {
  const time = new Date();
  const hour = dayjs(time).format('HH');
  if (isEdgeTime.indexOf(hour) !== -1)
    return dayjs(time.setDate(time.getDate() - 1))
      .format('YYYYMMDD-HH')
      .split('-');
  return dayjs(time).format('YYYYMMDD-HH').split('-');
};

const getBaseTime = () => {
  const [baseDate, baseHour] = getCurrentTime();
  const baseTime = [baseDate];
  if (isBaseTime.indexOf(baseHour) !== -1) baseTime.push(baseHour);
  else if (isBaseTimePlus1Hour.indexOf(baseHour) !== -1)
    baseTime.push(isBaseTime[isBaseTimePlus1Hour.indexOf(baseHour)]);
  else if (isBaseTimePlus2Hour.indexOf(baseHour) !== -1)
    baseTime.push(isBaseTime[isBaseTimePlus2Hour.indexOf(baseHour)]);
  return baseTime;
};

const getFcstValueOfUniqueItem = (items: Item[], category: string) =>
  items[items.findIndex((item) => item.category === category)].fcstValue;

const getPtyOrSkyOfItems = (items: Item[]) => {
  if (getFcstValueOfUniqueItem(items, 'PTY') === PTY_NULL_TYPE)
    return SKY_CONTENTS[parseInt(getFcstValueOfUniqueItem(items, 'SKY'))];
  return PTY_CONTENTS[parseInt(getFcstValueOfUniqueItem(items, 'PTY'))];
};

export { getBaseTime, getPtyOrSkyOfItems };
