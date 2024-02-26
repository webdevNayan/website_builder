import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Pages/Landing';

export default function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Landing} /> 
        </Routes>
      </BrowserRouter>

    </>
  )
}
