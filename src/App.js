import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

import Button from "./components/Button"; //component

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>일기장</h1>
        <Button
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"positive"}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
