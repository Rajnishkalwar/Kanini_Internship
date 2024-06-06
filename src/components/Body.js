import React from 'react';
import Login from './Login';
import Main from './Main'; 
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Body = () => {
      const AppRouter= createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/main",
            element: <Main/>
        },


      ]);


  return (
    <div>
        <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body