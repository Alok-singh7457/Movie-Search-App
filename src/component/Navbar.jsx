import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import SearchMovie from './SearchMovie';


const Navbar = () => {

  const [input, setInput] = useState('')
  const navigate = useNavigate();

 const handleSearchClick = () => {
    if (input.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(input)}`);
    }
  };
 

  return (
    <div>

      <div className='text-white flex justify-between pt-3 px-5 z-10'>

        <div className="signature cursor-pointer font-bold font-mono text-xl">Creator.<span className='text-yellow-400 '>Alok</span></div>


        <div className="bar flex gap-3 bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md shadow-[0 4px 6px rgba(0, 0, 0, 0.1)]">



        <NavLink to='/'>Home</NavLink>


          <div className="search">
            <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
              className='outline-none text-black pl-1'
              type="search"  name="" id="" />
          </div>

          <button onClick={handleSearchClick} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-3  text-center me-2 mb-2 '>Search</button>
         
         
          <NavLink to='/ForYouMovie'>For You</NavLink>

        </div>

        <div className="profile cursor-pointer "> <img className='rounded-full' src="image/profile.gif" width='30px' alt="" /> </div>

      </div>


    </div>
  )
}

export default Navbar
