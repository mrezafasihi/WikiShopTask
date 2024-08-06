import  { useState } from "react";
import CustomeButton from "../helper/CustomeButton";
import rtlPlugin from "stylis-plugin-rtl";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Popop from "./calculator/Popop";
function Calculator() {
  const [chooseMonth, setChooseMonth] = useState(0);
  const [chooseRoutingPay, setChooseRoutingPay] = useState(null);
  const [price, setPrice] = useState(1234567000);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="border max-w-[580px] mx-auto rounded-[15px] [&>*]:flex [&>*]:justify-between space-y-5 px-[3.45%]">
      <Popop open={openModal} setOpen={setOpenModal}  />
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" stylisPlugins={[rtlPlugin]}>
            انتخاب خودرو
          </InputLabel>
          <Select
            stylisPlugins={[rtlPlugin]}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="انتخاب خودرو"
            onClick={() => setOpenModal(true)}
          ></Select>
        </FormControl>
      </div>
      <div className="flex-col">
        <div className="flex  justify-between w-full">
          <p className="font-semibold text-sm">پیش پرداخت:</p>
          <p>
            <span className="font-normal mr-1">{price}ت</span>
          </p>
        </div>
        <div className="">
          <input
            className="w-full appearance-none bg-[#A5A3A3] h-[3px] rounded cursor-pointer "
            type="range"
            onChange={(e) => setPrice(e.target.value)}
            min={100000000}
            max={90000000000}
            step={1000000}
            defaultValue={12000000}
          />
        </div>
      </div>
      <hr />
      <div>
        <p className="font-semibold text-sm">مدت زمان بازپرداخت:</p>
        <div className="w-[236px]  flex justify-between ">
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
        <p className="font-semibold text-sm">فاصله‌ی اقساط:</p>
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
