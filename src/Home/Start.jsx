import React from "react";
import Navbar from "../Components/Navbar";

export default function Start() {
  const handleSubmit = () => {
    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");
    const player1Choose = document.getElementById("choose");
    if (player1.value === "") player1.value = "Player 1";
    if (player2.value === "") player2.value = "Player 2";
    localStorage.setItem("player1Choose", player1Choose.value);
    localStorage.setItem("player1", player1.value);
    localStorage.setItem("player2", player2.value);
    localStorage.setItem("player1wins", 0);
    localStorage.setItem("player2wins", 0);
  };

  return (
    <>
      <Navbar />
      {console.log("Start component rendered")}
      <div className="min-h-screen min-w-full flex flex-col items-center justify-evenly">
        <div className="bg-blue-600 rounded-lg drop-shadow-2xl">
          <label className="flex flex-col text-center items-center justify-center">
            <div className="p-5 mb-5">
              <input
                type="text"
                id="player1"
                placeholder="Enter Player 1 name"
                className="p-3 mr-9 border-2 border-violet-950 bg-transparent rounded-md  "
              />
              <input
                type="text"
                id="player2"
                placeholder="Enter Player 2 name"
                className="p-3 ml-9 border-2 border-violet-950 bg-transparent rounded-md  "
              />
            </div>
            <div className="pb-5">
              <p className="text-slate-400 pb-3">
                Player 1 Please select to start
              </p>
              <select
                className="bg-transparent w-min border-2 border-violet-950 rounded-md text-center text-slate-400"
                id="choose"
              >
                <option value="X" className="bg-transparent">
                  X
                </option>
                <option value="O" className="bg-transparent">
                  0
                </option>
              </select>
            </div>
            <a
              className="text-white p-2 mb-5 rounded-lg bg-blue-950 text-xl"
              href="/play"
              onClick={handleSubmit}
            >
              Start Game
            </a>
          </label>
        </div>
      </div>
    </>
  );
}
