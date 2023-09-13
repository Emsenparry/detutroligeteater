import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Events from "../Pages/Events/Events";
import Actors from "../Pages/Actors/Actors";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import EventDetails from "../Pages/Events/EventDetails/EventDetails";
import BuyPage from '../Pages/BuyPage/BuyPage';
import ActorDetails from "../Pages/Actors/ActorDetails/ActorDetails";


const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/events">
        <Route index element={<Events />} />
        <Route path=":event_id" element={<EventDetails />} />
      </Route>

      <Route path="/actors">
        <Route index element={<Actors />} />
        <Route path=":actor_id" element={<ActorDetails />} />
      </Route>
    
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
