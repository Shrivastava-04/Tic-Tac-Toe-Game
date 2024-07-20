import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./Home/Start";
import Body from "./Main/Body";
import Footer from "./Footer/Footer";
import Result from "./Components/Result";
import Draw from "./Components/Draw";

export default function App() {
  return (
    <>
      <div className="p-4 flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/play" element={<Body />} />
          <Route path="/result" element={<Result />} />
          <Route path="/draw" element={<Draw />} />
        </Routes>
      </div>
    </>
  );
}
