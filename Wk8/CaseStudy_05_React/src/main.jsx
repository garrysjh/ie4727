import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Menu from './Menu.jsx';
import Music from './Music.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Jobs from './Jobs.jsx';

const router = createBrowserRouter([
{
  path: "/",
  element: App(),
},
{
  path: "/menu",
  element: Menu(),
},
{
  path: "/jobs",
  element: Jobs(),
},
{
  path: "/music",
  element: Music(),
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);