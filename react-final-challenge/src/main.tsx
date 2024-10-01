import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
import './index.css'

//configurar router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./routes/Home.tsx"
import About from "./routes/About.tsx"
import Works from "./routes/Works.tsx"
import ErrorPage from './routes/ErrorPage.tsx';
import App from './App.tsx';

/*const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"about",
    element: <About/>
  },
  {
    path:"works",
    element: <Works/>
  },

])
*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "works",
        element: <Works/>,
      }
    ]
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
