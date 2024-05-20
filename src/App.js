import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Bookings from './pages/bookings/Bookings';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import MainLayout from './layouts/MainLayout';
import ConfirmedBooking from './components/bookings/ConfirmedBooking'

function App() {
  return (
      <div className="App">
        <MainLayout>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/reservation" element={<Bookings/>} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking/>} />
        <Route path="/order-online" element={<OrderOnline/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </MainLayout>
      </div>
  );
}

export default App;
