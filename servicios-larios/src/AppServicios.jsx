import React from 'react'
import { ListServicio } from './components/components/ListServicio'
import { CreateServicio } from './components/components/CreateServicio'
import {BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Lista } from './UserComponents/components/Lista';
export const AppServicios = () => {
  return (
    <>
        <Router>
      <div>AppServicios</div>
      <div>
        <Routes>
          <Route path="/" element={<ListServicio />} />
          <Route path="/servicios" element={<Lista />} />
          <Route path="/create-servicio" element={<CreateServicio />} />
        </Routes>
      </div>
    </Router>
        
    </>
    
  )
}
