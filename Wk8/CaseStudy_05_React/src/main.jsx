import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Menu from './Menu.jsx';
import Music from './Music.jsx';
import Admin from './Admin.jsx';
import MenuEdit from './MenuEdit.jsx';
import Dashboard from './Dashboard.jsx';
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
},
{
  path: "/admin",
  element: Admin(),
},
{
  path: "/menuedit",
  element: MenuEdit(),
},
{
  path: "/dashboard",
  element: Dashboard(),
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);