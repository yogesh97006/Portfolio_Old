import React, { useState } from "react";
import "./Home.css";
import img from "../../Images/Home.webp"
import Dev from '../../Images/Dev.gif'
import { Box, Button ,Modal, Typography,} from "@mui/material";


function Home() {
  const [OpenModal, setOpenModal] = useState(false);

const resume=()=>{
  const pathurl='https://drive.google.com/file/d/17HQu7FkK023RnAnxiWidfRXMSTusAEGH/view?usp=sharing';

  window.open(pathurl,'_blank')
}


  function HandleOpenModal(){
    setOpenModal(!OpenModal)
  }

  function HandleCloseModel(){
    setOpenModal(false)
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #0000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="all">
      <div className="home">
        <h3>
          Welcome To My <span>Portfolio</span>
        </h3>
        <h1 className="About_Home">
          My Name is <span className="Home_Name">Yogesh Saini</span>
          <br />& I am a 
          <span className="Home_Profession"> Frontend Developer</span>
        </h1>
        <div className="Home_Buttons">
          <button className="Resume" onClick={resume}>
         <i className="bi bi-file-earmark-person-fill" ></i>
          </button>
          <button className="Message" onClick={HandleOpenModal}>
            <i class="bi bi-chat-dots"></i>
          </button>
        </div>
      </div>
      <div className="Images">
        <img className="img2" src={Dev} alt="img" />
        <img className="img1" src={img} alt="img" />
      </div>
      {OpenModal?<Modal
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          open={HandleOpenModal}
          onClose={HandleCloseModel}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" className="Heading_Modal" variant="h6" component="h2">
Message            </Typography>
            <div className="Form">
              <label>Name :</label>
              <input type='text' />
            </div>
            <div className="Form">
              <label>Phone :</label>
              <input type='text' />
            </div>
              <label>Write Your Message :</label>
              <br />
              <textarea className="Text_Area"/>
              <div className="Button_Modal">
          <Button variant="contained" color="info">
              Submit
              </Button>
              <Button variant="contained" color="error" onClick={HandleCloseModel}>
              Cancel
              </Button>
          </div>
          </Box>
        </Modal>:HandleOpenModal
      }
    </div>
  );
}

export default Home;
