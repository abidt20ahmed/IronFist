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
import { Flowbite } from 'flowbite-react';
import AuthProvider from './context/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Flowbite>
    {/* <div className=' dark:bg-slate-900'> */}
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </AuthProvider>
      </React.StrictMode>
    </QueryClientProvider>
    {/* </div> */}
  </Flowbite>
)
