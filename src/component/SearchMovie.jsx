import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';

const SearchMovie = () => {
  const [Movies, setMovies] = useState([]);
  const location = useLocation();
  
  // Get the search query from the URL
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchMovie = async () => {
      if (query) {
        const URL = `https://www.omdbapi.com/?apikey=5b2d9f01&s=${query}&type=movie`;
        const response = await fetch(URL);
        const finalData = await response.json();
        console.log(finalData);
        setMovies(finalData.Search || []);
      }
    };
    fetchMovie();
  }, [query]); // Add query as a dependency

  return (
    <div>
      <div className="container border-2 min-h-screen w-[90vw] m-auto rounded-lg mt-10">
        <div className="content flex flex-wrap justify-around">
          {Movies.map((val, index) => (
            <MovieCard key={index} poster={val.Poster} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;
