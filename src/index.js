import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Deliveries from './pages/Deliveries';
import Delivery from './pages/Delivery';
import Trucks from './pages/Trucks';
import Truck from './pages/Truck';
import Employes from './pages/Employes';
import Employe from './pages/Employe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deliveries" element={<Deliveries />} />
        <Route path="/deliveries/:id" element={<Delivery />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="/trucks/:id" element={<Truck />} />
        <Route path="/employes" element={<Employes />} />
        <Route path="/employes/:id" element={<Employe />} />
      </Routes>
    </BrowserRouter>
  </div>
);
