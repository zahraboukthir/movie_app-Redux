import React from "react";
import { useState } from "react";

import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addmovie } from './../js/actions';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function ADDMovie() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch=useDispatch()
  const [NewMovie, setNewMovie] = useState({
    image: "",
    rating: 0,
    name: "",
    date: "",
    desc: "",
  });
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handelSubmit = (e) => {
    e.preventDefault();
  
dispatch(addmovie({...NewMovie,id:Math.random()}))
setNewMovie({image: "",
rating: 0,
name: "",
date: "",
desc: "",})
closeModal()  
};

  const handelchange = (e) => { 
    setNewMovie({...NewMovie,[e.target.name]:e.target.value})
   }
  return (
    <div>
      <button onClick={openModal}>ADD MOVIE</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>I am a modal</div>
        <form onSubmit={handelSubmit}>
          <label htmlFor="">Name</label>
          <input type="text" name="name" required onChange={handelchange} value={NewMovie.name} />
          <label htmlFor="">Image</label>
          <input type="url" name="image" required onChange={handelchange} value={NewMovie.image}  />
          <label htmlFor="">date</label>
          <input type="date" name="date" required onChange={handelchange} value={NewMovie.date} />
          <label htmlFor="">Rate</label>
          <input type="number" name="rating" required onChange={handelchange}value={NewMovie.rating} />
          <label htmlFor="">Descreption</label>
          <input type="text" name="desc" required onChange={handelchange}value={NewMovie.desc} />
          <button>submit</button>
          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
  );
}

export default ADDMovie;
