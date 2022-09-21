import * as React from "react";

import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import "./ContentModal.css";
import Rating from "@mui/material/Rating";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviedetails } from "../js/actions";
import { useNavigate } from "react-router-dom";
export default function MovieDetails() {
  //   const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const el = useSelector((state) => state.movieDetails);
  useEffect(() => {
    dispatch(moviedetails(id));
  }, [dispatch, id]);
  const navigate = useNavigate();
  return (
    <div>
      <Modal
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        open={true}
        className="modal"

        // closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 500,
        // }}
      >
        <Fade in={true}>
          {el && (
            <div className="paper">
              <div className="ContentModal">
                <img src={el.image} alt="" className="ContentModal__portrait" />
                {/* <img
                  src={el.image}
                  alt=""
                  className="ContentModal__landscape"
                /> */}
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {el.name} ({el.date})
                  </span>
                  {
                    <i className="tagline">
                      <Rating readOnly value={el.rating} />
                    </i>
                  }

                  <span className="ContentModal__description">{el.desc}</span>

                  {/* <div>
                    <Carousel id={id} media_type={media_type} />
                  </div> */}

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`${el.trailer}`}
                  >
                    Watch the Trailer
                  </Button>
                  <Button
                    onClick={() => navigate("/")}
                    variant="contained"
                    color="secondary"
                    target="__blank"
                  >
                    Back to List
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
