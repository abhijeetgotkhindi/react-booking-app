import React from "react";
import axios from 'axios';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DashboardCards from "./components/DashboardCards";
import LatestMovies from "./components/LatestMovies";
import MovieDetails from "./components/MovieDetails";
import MovieBookingDetails from "./components/MovieBooking"
import TicketDetails from "./components/TicketDetails"
import UpcomingEvents from "./components/UpcomingEvents";
import UpcomingMovies from "./components/UpcomingMovies";
import store from "./components/store/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<DashboardCards />} />
              <Route path="/latestmovies" element={<LatestMovies />} />
              <Route path="/moviedetails" element={<MovieDetails />} />
              <Route path="/bookticket" element={<MovieBookingDetails />} />
              <Route path="/ticketdetails" element={<TicketDetails />} />
              <Route path="/upcomingevents" element={<UpcomingEvents />} />              
              <Route path="/upcomingmovies" element={<UpcomingMovies />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </Provider>
  );
}
