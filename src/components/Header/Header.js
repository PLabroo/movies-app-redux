import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";
const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (search === "") {
      toast.error("Please Enter Movie Or Show Name", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    dispatch(fetchAsyncMovies(search));
    dispatch(fetchAsyncSeries(search));
    setSearch("");
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="logo">Movie App</div>
        </Link>

        <div className="search-bar">
          <form action="" onSubmit={submitHandler}>
            <input
              type="text"
              value={search}
              placeholder="Search Any Movie|Show"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="Submit">
              <i className="fa fa-search"></i>
            </button>
            <ToastContainer
              position="top-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </form>
        </div>
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
    </>
  );
};

export default Header;
