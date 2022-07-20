import { LocationIcon } from "~/utils/icons";

const VAC = () => {
  return (
    <section className="pt-7 bg-banner-1">
      <div className="relative">
        {/* 로고와 텍스트 */}
        <div className="w-full px-7">
          <img
            className="w-[5.4rem]"
            src="/images/01_Logotype.png"
            alt="logo.png"
            loading="lazy"
          />
          <p className="whitespace-pre-line text-[1.45rem] pt-10">
            김고고님,
            <br />
            오늘은 등산하기
            <br />딱 좋은 화창한 날이에요!
          </p>
          {/* 날씨 관련 */}
          <div className="pt-2 flex items-center">
            <i className="w-3 text-primary">
              <LocationIcon />
            </i>
            <span className="pl-2 text-primary text-sm">서울시 중구 명동</span>
          </div>
        </div>
        {/* 날씨 이미지 */}
        <picture className="absolute w-36 top-5 right-5">
          <img src="/images/07_Sunny.png" alt="Sunny.png" loading="lazy" />
        </picture>
        <picture className="absolute w-full bg-banner-1">
          <img
            src="/images/06_Sunny_Landing.png"
            alt="Sunny_Landing.png"
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  );
};

export default VAC;
