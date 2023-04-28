import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../api/axios";
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer";

const Row = ( { title,fetchUrl, isLargeRow = false }) => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('');
    }else{
      movieTrailer(null ,{ tmdbId: movie.id })
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch((error) => console.log(error));
    }
  }

  return (
    <div className="row">
      <h1 className="row_title">{title}</h1>

      <div className="row_posters">
        {movie.map((movie) => (
         <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge" }`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />                   
          ))}
          
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  );
};

export default Row;
