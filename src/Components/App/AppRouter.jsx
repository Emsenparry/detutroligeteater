import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home';
import Events from '../Pages/Events/Events';
import Actors from '../Pages/Actors/Actors';
import Login from '../Pages/Login/Login';
import NotFound from '../Pages/NotFound/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/events' element={<Events />} />
      <Route path='/actors' element={<Actors />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter