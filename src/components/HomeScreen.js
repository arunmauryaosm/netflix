import React from "react";
import Navbar from "./Navbar";
import "./HomeScreen.css";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../api/Requests";
import Footer from "./Footer";

const HomeScreen = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* banner */}
      <Banner />

      {/* row */}
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}  />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}  />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}  />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}  />   

      <Footer/>

    </div>
  );
};

export default HomeScreen;
