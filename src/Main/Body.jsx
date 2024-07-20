import React from "react";
import Navbar from "../Components/Navbar";
import Board from "../Components/Board";
import Reload from "../Components/Reload";
import Score from "../Components/Score";

export default function Body() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Navbar />
        <Board />
        {/* <Score /> */}
        <Reload />
      </div>
    </>
  );
}
