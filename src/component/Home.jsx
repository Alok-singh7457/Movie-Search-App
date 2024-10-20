import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MovieCard from './MovieCard'



const Home = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([])
  const handleSeeAll = () => {

    navigate('/seeAll')

  }

  useEffect(() => {

    const fetchMovie = async () => {
      const URL = 'https://www.omdbapi.com/?apikey=5b2d9f01&s=iron&type=movie'
      const response = await fetch(URL)
      const finalData = await response.json()
      console.log(finalData)
      setMovies(finalData.Search || [])

    }
    fetchMovie();
  }, [])


  return (
    <>

      <div className="Container border-2 min-h-screen w-[90vw] m-auto rounded-lg mt-10">





        <div className="heading flex justify-between border-b-2 w-[80vw] m-auto items-center pt-8">

          <div className="text text-xl font-serif">
            Watch Movie For You
          </div>

          <div className="seeAll">
            <button onClick={handleSeeAll} className='text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'disabled >See All</button>
          </div>


        </div>


        <div className="content flex flex-wrap justify-around">

          {
            // Display only the first 10 movies using `slice` before `map`
            movies.slice(0, 10).map((val, index) => (
              <MovieCard key={index} poster={val.Poster}  />
            ))
          }


        </div>


      </div>

    </>
  )
}

export default Home
