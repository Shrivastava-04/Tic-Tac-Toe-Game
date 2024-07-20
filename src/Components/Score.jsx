import React from "react";

export default function Score() {
  const player1wins = localStorage.getItem("player1wins");
  const player2wins = localStorage.getItem("player2wins");
  const player1 = localStorage.getItem("player1");
  const player2 = localStorage.getItem("player2");
  return (
    <>
      <div className="flex mt-4 gap-32 text-3xl">
        <h1 className="bg-sky-100 bg-opacity-60 p-4 rounded-lg">
          {player1}: {player1wins}
        </h1>
        <h1 className="bg-sky-100 bg-opacity-60 p-4 rounded-lg">
          {player2}: {player2wins}
        </h1>
      </div>
    </>
  );
}
