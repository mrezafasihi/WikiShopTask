import React, { useState } from "react";
import FirstModal from "./FirstModal";
import Modal from "@mui/material/Modal";
import SecondModal from "./SecondModal";
import Box from "@mui/material/Box";
import ThirdModal from "./ThirdModal";

function Popop({ setOpen, open }) {
  const handleClose = () => setOpen(false);
  const [modalNum, setModalNum] = useState(1);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box >
      {modalNum == 1 && <FirstModal setModalNum={setModalNum} />}
      {modalNum == 2 && <SecondModal setModalNum={setModalNum} />}
      {modalNum == 3 && <ThirdModal setModalNum={setModalNum} />}
    </Box>
       

      
    </Modal>
  );
}

export default Popop;
