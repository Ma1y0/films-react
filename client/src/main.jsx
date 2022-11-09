import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage, ActorsPage, DirectorsPage, FilmsPage, _404NotFound } from "./Pages/index"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/actors" element={<ActorsPage />} />
        <Route path="/directors" element={<DirectorsPage />} />
        <Route path="*" element={<_404NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
