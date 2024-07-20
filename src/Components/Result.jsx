import React from "react";
import Reload from "./Reload";

export default function Result() {
  const winner = localStorage.getItem("winner");
  let player = "";
  if (winner == null) {
    player = "Draw";
  } else if (winner == "Player 1") {
    player = localStorage.getItem("player1");
  } else {
    player = localStorage.getItem("player2");
  }
  return (
    <>
      <div className="min-h-screen min-w-fit flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-9xl">!! Winner !!</h1>
          <p className="text-8xl font-bold">{player}</p>
        </div>
        <Reload />
      </div>
    </>
  );
}
