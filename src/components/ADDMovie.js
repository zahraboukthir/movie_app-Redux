import Rating from "@mui/material/Rating";
import React from "react";
import { useState } from "react";

import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addmovie } from "./../js/actions";
import { useNavigate } from "react-router-dom";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function ADDMovie() {
  const navigate = useNavigate();
  // const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [rating, setRating] = React.useState(0);
  const [NewMovie, setNewMovie] = useState({
    image: "",
    trailer: "",
    name: "",
    date: "",
    desc: "",
  });
  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }
  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(addmovie({ ...NewMovie, rating, id: Math.random() }));
    setRating(0);
    setNewMovie({ image: "", name: "", date: "", desc: "", trailer: "" });
    // closeModal();
    navigate("/");
  };

  const handelchange = (e) => {
    setNewMovie({ ...NewMovie, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      <p>ADD MOVIE</p>
      {/* <Modal
        isOpen={true}
        // onRequestClose={closeModal}
        style={{widh:"100%"}}
        contentLabel="Example Modal"
      > */}
      <form onSubmit={handelSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          required
          onChange={handelchange}
          value={NewMovie.name}
        />
        <label htmlFor="">Image</label>
        <input
          type="url"
          name="image"
          required
          onChange={handelchange}
          value={NewMovie.image}
        />
        <label htmlFor="">Trailer</label>
        <input
          type="url"
          name="trailer"
          required
          onChange={handelchange}
          value={NewMovie.trailer}
        />
        <label htmlFor="">date</label>
        <input
          type="date"
          name="date"
          required
          onChange={handelchange}
          value={NewMovie.date}
        />
        <label htmlFor="">Rate</label>
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        {/* <input type="number" name="rating" required onChange={handelchange}value={NewMovie.rating} /> */}
        <label htmlFor="">Descreption</label>
        <input
          type="text"
          name="desc"
          required
          onChange={handelchange}
          value={NewMovie.desc}
        />
        <button>submit</button>
        <button onClick={() => navigate("/")}>close</button>
      </form>
      {/* </Modal> */}
    </div>
  );
}

export default ADDMovie;
