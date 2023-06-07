import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Router,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import AuthProvider from './context/AuthProvider';
// import router from './Routes/Routes';
// import AuthProvider from './context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Flowbite>
    <div className=' bg-indigo-100 dark:bg-slate-900'>
      <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
          <DarkThemeToggle />
          <ToastContainer />
        </AuthProvider>
      </React.StrictMode>
    </div>,
  </Flowbite>
)
