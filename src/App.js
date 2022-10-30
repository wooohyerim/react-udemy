import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteTest from "./components/RouteTest";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>일기장</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/diary/:id" element={<Diary />} />
      </Routes>
      <RouteTest />
    </BrowserRouter>
  );
};

export default App;
