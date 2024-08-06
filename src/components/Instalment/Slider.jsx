import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";

export const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <>
       <div
        onClick={() => swiper.slideNext()}
        className="absolute z-10 top-40 left-0 "
      >
        <svg
          width="43"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4527 21.6778L23.8452 30.0704V13.2852L15.4527 21.6778ZM0.765614 21.6778C0.765614 18.7753 1.31638 16.0478 2.41791 13.495C3.51944 10.9423 5.01436 8.72172 6.90269 6.83339C8.79103 4.94505 11.0116 3.45012 13.5643 2.3486C16.1171 1.24707 18.8447 0.696304 21.7471 0.696304C24.6495 0.696304 27.3771 1.24707 29.9299 2.3486C32.4826 3.45012 34.7032 4.94505 36.5915 6.83339C38.4798 8.72172 39.9748 10.9423 41.0763 13.495C42.1778 16.0478 42.7286 18.7753 42.7286 21.6778C42.7286 24.5802 42.1778 27.3078 41.0763 29.8606C39.9748 32.4133 38.4798 34.6339 36.5915 36.5222C34.7032 38.4105 32.4826 39.9054 29.9299 41.007C27.3771 42.1085 24.6495 42.6593 21.7471 42.6593C18.8447 42.6593 16.1171 42.1085 13.5643 41.007C11.0116 39.9054 8.79103 38.4105 6.90269 36.5222C5.01436 34.6339 3.51944 32.4133 2.41791 29.8606C1.31638 27.3078 0.765614 24.5802 0.765614 21.6778Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div
        onClick={() => swiper.slidePrev()}
        className={`absolute top-40 z-10 right-0 hover:text-customColor-green `}
      >
       
        <svg
          width="43"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.5473 21.3222L19.1548 12.9296L19.1548 29.7148L27.5473 21.3222ZM42.2344 21.3222C42.2344 24.2247 41.6836 26.9522 40.5821 29.505C39.4806 32.0577 37.9856 34.2783 36.0973 36.1666C34.209 38.0549 31.9884 39.5499 29.4357 40.6514C26.8829 41.7529 24.1553 42.3037 21.2529 42.3037C18.3505 42.3037 15.6229 41.7529 13.0701 40.6514C10.5174 39.5499 8.29684 38.0549 6.40851 36.1666C4.52017 34.2783 3.02524 32.0577 1.92371 29.505C0.822187 26.9522 0.271423 24.2247 0.271423 21.3222C0.271423 18.4198 0.822187 15.6922 1.92371 13.1394C3.02524 10.5867 4.52017 8.36615 6.40851 6.47781C8.29684 4.58948 10.5174 3.09455 13.0701 1.99303C15.6229 0.891499 18.3505 0.340733 21.2529 0.340733C24.1553 0.340733 26.8829 0.891499 29.4357 1.99303C31.9884 3.09455 34.209 4.58948 36.0973 6.47781C37.9856 8.36615 39.4806 10.5867 40.5821 13.1394C41.6836 15.6922 42.2344 18.4198 42.2344 21.3222Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
   
    </>
  );
};
function Slider() {
  const infoSlider = [
    { src: "./images/Faraaz.png", title: "واسپاری فردا", profit: 26 },
    { src: "./images/Farda.png", title: "واسپاری فردا", profit: 26 },
    { src: "./images/Gardesggari.png", title: "بانک گردشگری", profit: 26 },
    { src: "./images/Faraaz.png", title: "فراز اندیشان", profit: 26 },
    { src: "./images/Farda.png", title: "فراز اندیشان", profit: 26 },
   
  ];
  const [clickedIndex, setClickedIndex] = useState(1);

  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={10}
        modules={[]}
        className="w-[550px]"
      >
        {infoSlider.map((item, index) => {
          return (
            <SwiperSlide
              className={`w-[120px] h-[150px] border rounded-[15px] flex flex-col justify-center items-center mt-[20%]  hover:bg-[#dffbd6] hover:border-[#5eed2f] cursor-pointer ${
                clickedIndex == index ? "bg-[#dffbd6] border-[#0f5344]" : ""
              } `}
              key={index}
              onClick={() => setClickedIndex(index)}
            >
              <img
                className={` ${clickedIndex == index ? "" : ""} h-[60px]`}
                src={item.src}
                alt=""
              />
              {clickedIndex == index ? (
                <>
                  <h6 className="text-[#0f5344] font-bold">{item.title}</h6>
                  <p className="bg-[#0f5344] text-white rounded-[30px] font-extralight text-sm px-1">
                    سود سالیانه : <span>%{item.profit}</span>
                  </p>
                </>
              ) : null}
            </SwiperSlide>
          );
        })}
        <SwiperButton/>
      </Swiper>
    </>
  );
}

export default Slider;
