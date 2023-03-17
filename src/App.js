import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const App = () => {
  return (
    <>
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movie/:imdbID" element={<MovieDetail />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </>
  );
};

export default App;
