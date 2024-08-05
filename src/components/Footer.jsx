import React from "react";

function Footer() {
  const downloadImages = [
    { src: "./images/Bazaar.png", alt: "Bazaar" },
    { src: "./images/Myket.png", alt: "Myket" },
    { src: "./images/TestFlight.png", alt: "TestFlight" },
    { src: "./images/DirectAPK.png", alt: "DirectAPK" },
    { src: "./images/PWA.png", alt: "PWA" },
    { src: "./images/SibApp.png", alt: "SibApp" },
  ];

  return (
    <div className="bg-[#0E5445] flex flex-col justify-center items-center lg:justify-between lg:flex-row text-white px-[8%]">
      <div>
        <h6>دریافت برنامه:</h6>
        <div className="flex w-[415px] justify-between flex-wrap ">
          {downloadImages.map((item) => {
            return (
              <img
                className="w-[135px]"
                key={item.alt}
                src={item.src}
                alt={item.alt}
              />
            );
          })}
        </div>
      </div>
      <div>
        <div>
          <h6 className="font-light">شبکه‌های اجتماعی:</h6>
        </div>
        <div>
          <h6 className="font-light">اطلاعات تماس:</h6>
          <p>تهران، سعادت آباد، سرو شرقی، پلاک ۱۷۰۲۱-۲۶۷۴۰۰۸۴</p>
        </div>
      </div>
      <div className="bg-[#D9D9D9] rounded-[10px] w-[325px] h-[93.6] flex items-center justify-between">
        <img
          className="w-[100px] h-[83.6px]"
          src="./images/NezamSenfi.png"
          alt="NezamSenfi"
        />
        <img
          className="w-[130px] h-[83.6px]"
          src="./images/AnjomanSenfi.png"
          alt="AnjomanSenfi"
        />
        <img
          className="w-[65px] h-[83.6px]"
          src="./images/eNAMAD.png"
          alt="eNAMAD"
        />
      </div>
    </div>
  );
}

export default Footer;
