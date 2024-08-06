import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { CarsCompaney } from "./dataCars";

function FirstModal({ setModalNum }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 371,
    height:590,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    
  };
  return (
    <Box sx={style} >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        انتخاب برند و مدل
      </Typography>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          
        }}
      >
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.05814 0.5C4.05547 0.5 0 4.55547 0 9.55814C0 14.5608 4.05547 18.6163 9.05814 18.6163C11.3209 18.6163 13.3899 17.7866 14.9775 16.4148L17.8685 19.3059C18.1274 19.5647 18.547 19.5647 18.8059 19.3059C19.0647 19.047 19.0647 18.6274 18.8059 18.3685L15.9148 15.4775C17.2866 13.8899 18.1163 11.8209 18.1163 9.55814C18.1163 4.55547 14.0608 0.5 9.05814 0.5ZM1.32558 9.55814C1.32558 5.28757 4.78757 1.82558 9.05814 1.82558C13.3287 1.82558 16.7907 5.28757 16.7907 9.55814C16.7907 13.8287 13.3287 17.2907 9.05814 17.2907C4.78757 17.2907 1.32558 13.8287 1.32558 9.55814Z"
            fill="#353132"
          />
        </svg>

        <InputBase
          sx={{ flex: 1 }}
          placeholder="جستجو بین برند، مدل و تیپ‌ها"
          inputProps={{ "aria-label": "جستجو بین برند، مدل و تیپ‌ها" }}
        />
      </Paper>
      <div className="">
        {CarsCompaney.map((item) => {
          return (
            <div key={item.id} className="flex flex-col   ">
              <div
                onClick={() => setModalNum(2)}
                className="flex cursor-pointer justify-between my-3 "
              >
                <div className="flex ">
                  <img
                    className="w-[20px] h-[20px]"
                    src="/images/Loogo.png"
                    alt=""
                  />
                  <p>{item.model}</p>
                </div>
                <div>
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 1L1 6L6 11"
                      stroke="#353132"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <hr />
            </div>
          );
        })}
      </div>
    </Box>
  );
}

export default FirstModal;
