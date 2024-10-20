import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Adventure from './component/Adventure';
import Comedy from './component/Comedy';
import Horror from './component/Horror';
import Thriller from './component/Thriller';
import NewMovie from './component/NewMovie';
import ForYouMovie from './component/ForYouMovie';
import SeeAll from './SeeAll';
import SearchMovie from './component/SearchMovie';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: '/Adventure',
      element: (
        <>
          <Navbar />
          <Adventure />
        </>
      ),
    },
    {
      path: '/Comedy',
      element: (
        <>
          <Navbar />
          <Comedy />
        </>
      ),
    },
    {
      path: '/Horror',
      element: (
        <>
          <Navbar />
          <Horror />
        </>
      ),
    },
    {
      path: '/Thriller',
      element: (
        <>
          <Navbar />
          <Thriller />
        </>
      ),
    },
    {
      path: '/NewMovie',
      element: (
        <>
          <Navbar />
          <NewMovie />
        </>
      ),
    },
    {
      path: '/ForYouMovie',
      element: (
        <>
          <Navbar />
          <ForYouMovie />
        </>
      ),
    },
    {
      path:'/seeAll',
      element:(
        <>
          <Navbar />
          <SeeAll />
        </>
      ),
    },
    ,
    {
      path:'/search',
      element:(
        <>
          <Navbar />
          <SearchMovie />
        </>
      ),
    }
  ]);

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
