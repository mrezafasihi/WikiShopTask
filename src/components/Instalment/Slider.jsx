import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function Slider() {
  const infoSlider = [
    { src: "./images/Farda.png", title: "واسپاری فردا", profit: 26 },
    { src: "./images/Gardesggari.png", title: "بانک گردشگری", profit: 26 },
    { src: "./images/Faraaz.png", title: "فراز اندیشان", profit: 26 },
    { src: "", title: "", profit: 26 },
    { src: "", title: "", profit: 26 },
  ];
  const [clickedIndex, setClickedIndex] = useState(1);
  console.log(clickedIndex);
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
      </Swiper>
    </>
  );
}

export default Slider;
