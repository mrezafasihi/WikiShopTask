import React, { useState } from "react";
import CustomeButton from "../helper/CustomeButton";

function Calculator() {
  const [chooseMonth, setChooseMonth] = useState(0);
  const [chooseRoutingPay, setChooseRoutingPay] = useState(null);
  return (
    <div className="border max-w-[580px] mx-auto rounded-[15px] [&>*]:flex [&>*]:justify-between space-y-5 px-[3.45%]">
      <div>
        
      </div>
      <div className="flex-col">
        <div className="flex  justify-between w-full">
          <p>پیش پرداخت:</p>
          <p>
            ۱٬۲۳۴٬۵۶۷٬۰۰۰<span>ت</span>
          </p>
        </div>
        <div className="">
          <input
            className="w-full appearance-none bg-[#A5A3A3] h-[3px] rounded cursor-pointer "
            type="range"
          />
        </div>
      </div>
      <hr />
      <div>
        <p>مدت زمان بازپرداخت:</p>
        <div>
          <CustomeButton
            onClick={() => setChooseMonth(12)}
            title={"۱۲ ماهه"}
            style={`${
              chooseMonth == 12 ? "button-calc-active" : "button-calc"
            } w-[69px] h-[25px]`}
          />
          <CustomeButton
            onClick={() => setChooseMonth(24)}
            title={"۲۴ ماهه"}
            style={`${
              chooseMonth == 24 ? "button-calc-active" : "button-calc"
            } w-[69px] h-[25px]`}
          />
          <CustomeButton
            onClick={() => setChooseMonth(36)}
            title={"۳۶ ماهه"}
            style={`${
              chooseMonth == 36 ? "button-calc-active" : "button-calc"
            } w-[69px] h-[25px]`}
          />
        </div>
      </div>
      <hr />
      <div>
        <p>فاصله‌ی اقساط:</p>
        <CustomeButton
          onClick={() => setChooseRoutingPay(1)}
          title={"ماهانه"}
          style={`${
            chooseRoutingPay == 1 ? "button-calc-active" : "button-calc"
          } w-[64px] h-[25px]`}
        />
      </div>
      <hr />
      <div>
        <button className="button-calc-active w-[99px] h-[31px] mx-auto flex justify-center items-center mb-6">
          محاسبه
        </button>
      </div>
    </div>
  );
}

export default Calculator;
