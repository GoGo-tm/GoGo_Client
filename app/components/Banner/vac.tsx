import { LocationIcon } from "~/utils/icons";
import { Paragraph } from "../Typography";
import type { Props } from ".";
import type { FunctionComponent } from "react";

const VAC: FunctionComponent<Props> = (props) => {
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
          <Paragraph className="whitespace-pre-line text-[1.45rem] pt-10">
            {`김고고님,`}
            {`
            오늘은 등산하기`}
            {`
            딱 좋은 화창한 날이에요!`}
          </Paragraph>
          {/* 날씨 관련 */}
          <div className="pt-2 flex items-center">
            <i className="w-3 text-primary">
              <LocationIcon />
            </i>
            <span className="pl-2 text-primary text-sm">
              {props.userLocation
                ? props.userLocation
                : "서울특별시 중구 소공동"}
            </span>
          </div>
        </div>
        {/* 날씨 이미지 */}
        <picture className="absolute w-36 top-5 right-5">
          <img
            src={`/images/${props.weather ? props.weather : "Sunny.png"}`}
            alt="Sunny.png"
            loading="lazy"
          />
        </picture>
        <picture className="absolute w-full bg-banner-1">
          <img
            src={`/images/${
              props.landing ? props.landing : "Sunny_Landing.png"
            }`}
            alt="Sunny_Landing.png"
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  );
};

export default VAC;
