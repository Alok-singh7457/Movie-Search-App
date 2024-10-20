

const MovieCard = ({ poster }) => {



  return (
    <>
       <div className="Card">
        <div className="box mt-4 ml-3 mb-3 h-[300px] w-[200px] border-2 rounded-lg">
          {/* Movie Poster */}
          <img 
            src={poster} 
           
            className="h-full w-full object-cover rounded-lg"
          />

        
        </div>
      </div>

    </>
  )
}

export default MovieCard
