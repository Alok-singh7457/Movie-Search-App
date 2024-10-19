import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate();

  const handleGenere = (e) =>{
    

   const selectedGenre = e.target.value;
   if(selectedGenre){
    navigate(`/${selectedGenre}`)
   }

  }

  return (
    <div>

      <div className='text-white flex justify-between pt-3 px-5 z-10'>

        <div className="signature cursor-pointer font-bold font-mono text-xl">Creator.<span className='text-yellow-400 '>Alok</span></div>


        <div className="bar flex gap-3 bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md shadow-[0 4px 6px rgba(0, 0, 0, 0.1)]">


        <NavLink to='/'>Home</NavLink>


          <div className="search">
            <input
              className='outline-none'
              type="search" name="" id="" />
          </div>

          <div className="genere">
            <select className='text-black' name="" id="" onChange={handleGenere}>
              <option className='text-black' >Genere</option>
              <option className='text-black' value="Adventure">Adventure </option>
              <option className='text-black' value="Comedy">Comedy </option>
              <option className='text-black' value="Horror">Horror </option>
              <option className='text-black' value="Thriller">Thriller </option>
            </select>
          </div>

          <NavLink to='/NewMovie'>New Movie</NavLink>
          <NavLink to='/ForYouMovie'>For You</NavLink>

        </div>

        <div className="profile "> <img className='rounded-full' src="image/profile.gif" width='30px' alt="" /> </div>

      </div>


    </div>
  )
}

export default Navbar
