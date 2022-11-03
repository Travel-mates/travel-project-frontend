import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Destinations from "./components/Destinations";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Packages_Card from "./components/Packages_Card";
import Booking from "./components/Booking";

function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/destinations" element={<Destinations />}></Route>
        <Route path="/packages" element={<Packages_Card />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
