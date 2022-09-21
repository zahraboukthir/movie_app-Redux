import React, { useEffect } from "react";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { editmovie, moviedetails } from "./../js/actions";
import { useParams, useNavigate } from "react-router-dom";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function EditMovie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviedetails(id));
  }, [id, dispatch]);

  const navigate = useNavigate();
  const el = useSelector((state) => state.movieDetails);

  useEffect(() => {
    setoldMovie(el);
    setRating(el.rating);
  }, [el]);
  const [rating, setRating] = React.useState(0);
  const [oldMovie, setoldMovie] = useState({
    image: "",
    trailer: "",
    name: "",
    date: "",
    desc: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(editmovie(el.id, { ...oldMovie, rating, id: Math.random() }));
    setRating(0);
    setoldMovie({ image: "", name: "", date: "", desc: "", trailer: "" });
    navigate("/");
  };

  const handelchange = (e) => {
    setoldMovie({ ...oldMovie, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {/* <button onClick={openModal}>EDIT MOVIE</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      > */}
      <div>I am a modal</div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          required
          onChange={handelchange}
          value={oldMovie.name}
        />
        <label htmlFor="">Image</label>
        <input
          type="url"
          name="image"
          required
          onChange={handelchange}
          value={oldMovie.image}
        />
        <label htmlFor="">Trailer</label>
        <input
          type="url"
          name="trailer"
          required
          onChange={handelchange}
          value={oldMovie.trailer}
        />
        <label htmlFor="">date</label>
        <input
          type="date"
          name="date"
          required
          onChange={handelchange}
          value={oldMovie.date}
        />
        <label htmlFor="">Rate</label>
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        {/* <input type="number" name="rating" required onChange={handelchange}value={oldMovie.rating} /> */}
        <label htmlFor="">Descreption</label>
        <input
          type="text"
          name="desc"
          required
          onChange={handelchange}
          value={oldMovie.desc}
        />
        <button>submit</button>
        <button onClick={() => navigate("/")}>close</button>
      </form>
      {/* </Modal> */}
    </div>
  );
}

export default EditMovie;
