import React from "react";
import { useState } from "react";

import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editmovie } from './../js/actions';

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

function EditMovie({el}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch=useDispatch()
  const [oldMovie, setoldMovie] = useState({
    image: el.image,
    rating: el.rating,
    name: el.name,
    date: el.date,
    desc: el.desc,
  });
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handelSubmit = (e) => {
    e.preventDefault();
  
dispatch(editmovie(el.id,{...oldMovie,id:Math.random()}))
setoldMovie({image: "",
rating: 0,
name: "",
date: "",
desc: "",})
closeModal()  
};

  const handelchange = (e) => { 
    setoldMovie({...oldMovie,[e.target.name]:e.target.value})
   }
  return (
    <div>
      <button onClick={openModal}>EDIT MOVIE</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>I am a modal</div>
        <form onSubmit={handelSubmit}>
          <label htmlFor="">Name</label>
          <input type="text" name="name" required onChange={handelchange} value={oldMovie.name} />
          <label htmlFor="">Image</label>
          <input type="url" name="image" required onChange={handelchange} value={oldMovie.image}  />
          <label htmlFor="">date</label>
          <input type="date" name="date" required onChange={handelchange} value={oldMovie.date} />
          <label htmlFor="">Rate</label>
          <input type="number" name="rating" required onChange={handelchange}value={oldMovie.rating} />
          <label htmlFor="">Descreption</label>
          <input type="text" name="desc" required onChange={handelchange}value={oldMovie.desc} />
          <button>submit</button>
          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
  );
}



export default EditMovie