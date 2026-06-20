import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import BadgeSample from './badge-sample/badge-sample';
import ButtonSample from './button-sample/button-sample';
import './index.css';
import ModalSample from './modal-sample/modal-sample';
import TabSample from './tab-sample/tab-sample';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='badge-sample' element={<BadgeSample />} />
      <Route path='button-sample' element={<ButtonSample />} />
      <Route path='modal-sample' element={<ModalSample />} />
      <Route path='tab-sample' element={<TabSample />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
