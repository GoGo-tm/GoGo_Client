const SKY_CONTENTS = [
  null,
  {
    content: '김고고님!\n오늘은 등산하기\n딱 좋은 화창한 날이에요!',
    landingImg: '/images/Sunny_Landing.png',
    weatherImg: '/images/Sunny.png',
  },
  null,
  {
    content: '김고고님!\n오늘은 멋진 구름층을\n구경할 수 있는 날이에요!',
    landingImg: '/images/Sunny_Landing.png',
    weatherImg: '/images/Very_Cloudy.png',
  },
  {
    content: '김고고님!\n오늘처럼 몸이 찌뿌둥할 땐\n등산을 떠나보세요!',
    landingImg: '/images/Sunny_Landing.png',
    weatherImg: '/images/Cloudy.png',
  },
];

const PTY_NULL_TYPE = '0';

const PTY_CONTENTS = [
  null,
  {
    content: '김고고님!\n오늘은 비가 와서\n산행에 주의가 필요한 날이에요!',
    landingImg: '/images/Rainy_Landing.png',
    weatherImg: '/images/Rainy.png',
  },
  {
    content: '김고고님!\n오늘은 비와 눈이 와서\n산행에 주의가 필요한 날이에요!',
    landingImg: '/images/Rainy_Landing.png',
    weatherImg: '/images/Snow_Rainy.png',
  },
  {
    content: '김고고님!\n오늘은 눈이 와서\n시야가 흐릴 수 있으니 유의하세요!',
    landingImg: '/images/Rainy_Landing.png',
    weatherImg: '/images/Snow.png',
  },
  {
    content:
      '김고고님!\n오늘은 소나기가 내려서\n산행에 주의가 필요한 날이에요!',
    landingImg: '/images/Rainy_Landing.png',
    weatherImg: '/images/Shower.png',
  },
];

export { PTY_CONTENTS, PTY_NULL_TYPE, SKY_CONTENTS };
