import React, { useState } from "react";

function View() {
  const documents = [
    "مدارک هویتی",
    "مدارک شغلی",
    "مدارک محل سکونت",
    "چک صیادی",
    "ضامن",
    "حداکثر سن خریدار ۵۹ ساله",
    "حداکثر عمر خودرو داخلی ۵ سال",
    "حداکثر عمر خودرو خارجی ۱۰ سال",
  ];
  const [openDocuments, setOpenDocuments] = useState(false);
  return (
    <div className="border max-w-[580px] mx-auto rounded-[15px] [&>*]:flex [&>*]:justify-between px-[3.45%] space-y-2 py-4">
      <div>
        <p className="text-[#707070] text-sm">پیش‌پرداخت:</p>
        <p className="font-bold text-[15px]">
          ۱٬۲۳۴٬۵۶۷٬۰۰۰<span className="font-normal mr-1">ت</span>
        </p>
      </div>
      <hr />
      <div>
        <p className="text-[#707070] text-sm">مبلغ هر قسط:</p>
        <p className="font-bold text-[15px]">
          ۱٬۲۳۴٬۵۶۷٬۰۰۰<span className="font-normal mr-1">ت</span>
        </p>
      </div>
      <hr />
      <div>
        <p className="text-[#707070] text-sm">مبلغ نهایی خودرو:</p>
        <p className="font-bold text-[15px]">
          ۱٬۲۳۴٬۵۶۷٬۰۰۰<span className="font-normal mr-1">ت</span>
        </p>
      </div>
      <hr />
      <div>
        <p className="text-[#707070] text-sm">گردش ماهانه:</p>
        <p className="font-bold text-[15px]">
          ۱٬۲۳۴٬۵۶۷٬۰۰۰<span className="font-normal mr-1">ت</span>
        </p>
      </div>
      <hr />
      <div>
        <p className="text-[#707070] text-sm">مدارک مورد نیاز:</p>
        <div className="flex justify-center items-center">
          <svg
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setOpenDocuments(!openDocuments)}
            className={`cursor-pointer h-[10px] ${openDocuments?"rotate-180":""}`}
          >
            <path
              d="M4.47501 4.475L0.850012 0.85C0.800012 0.8 0.762512 0.745833 0.737512 0.6875C0.712512 0.629167 0.700012 0.566667 0.700012 0.5C0.700012 0.366667 0.745846 0.25 0.837512 0.15C0.929179 0.05 1.05001 0 1.20001 0H8.80001C8.95001 0 9.07085 0.05 9.16251 0.15C9.25418 0.25 9.30001 0.366667 9.30001 0.5C9.30001 0.533333 9.25001 0.65 9.15001 0.85L5.52501 4.475C5.44168 4.55833 5.35835 4.61667 5.27501 4.65C5.19168 4.68333 5.10001 4.7 5.00001 4.7C4.90001 4.7 4.80835 4.68333 4.72501 4.65C4.64168 4.61667 4.55835 4.55833 4.47501 4.475Z"
              fill="#707070"
            />
          </svg>
        </div>
      </div>
      <div>
        {openDocuments ? (
          <ul className="list-disc space-y-1">
            {documents.map((item, index) => {
              return <li key={index} className="mr-6 text-sm">{item}</li>;
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default View;
