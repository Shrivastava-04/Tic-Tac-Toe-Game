import React, { useState } from "react";
import Result from "./Result";
import Score from "./Score";

export default function Board() {
  const [count, setcount] = useState(1);
  const [cnt, setcnt] = useState(1);

  const handleClick = () => {
    setcount(count + 1);
    if (count % 2 !== 0) {
      document.getElementById(event.target.id).innerText = "X";
      document.getElementById(event.target.id).disabled = true;
      document.getElementById(event.target.id).style.backgroundColor =
        "rgb(181, 23, 158)";
    } else {
      document.getElementById(event.target.id).innerText = "O";
      document.getElementById(event.target.id).disabled = true;
      document.getElementById(event.target.id).style.backgroundColor =
        "rgb(105, 206, 229)";
    }
    checkWin();
  };
  const checkWin = () => {
    const board = document.querySelectorAll("button");
    const winningCombinations = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["3", "6", "9"],
      ["1", "5", "9"],
      ["3", "5", "7"],
    ];
    const currentCombinations = [];
    for (let i = 0; i < board.length; i++) {
      if (board[i].innerText === "X" || board[i].innerText == "O")
        currentCombinations.push(board[i].id);
    }
    var result = [];

    for (let i = 0; i < currentCombinations.length - 2; i++) {
      for (let j = i + 1; j < currentCombinations.length - 1; j++) {
        for (let k = j + 1; k < currentCombinations.length; k++) {
          var x = [];
          x.push(currentCombinations[i]);
          x.push(currentCombinations[j]);
          x.push(currentCombinations[k]);
          result.push(x);
        }
      }
    }
    for (let i = 0; i < result.length; i++) {
      if (
        board[result[i][0] - 1].innerHTML ===
          board[result[i][1] - 1].innerHTML &&
        board[result[i][1] - 1].innerHTML === board[result[i][2] - 1].innerHTML
      ) {
        for (let j = 0; j < winningCombinations.length; j++) {
          if (
            winningCombinations[j][0] === result[i][0] &&
            winningCombinations[j][1] === result[i][1] &&
            winningCombinations[j][2] === result[i][2]
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };
  const handleReset = () => {
    if (checkWin()) {
      if (count % 2 !== 0) {
        localStorage.setItem("winner", "Player 1");
        localStorage.getItem("player1wins");
        localStorage.setItem(
          "player1wins",
          parseInt(localStorage.getItem("player1wins")) + 1
        );
      } else {
        localStorage.setItem("winner", "Player 2");
        localStorage.getItem("player2wins");
        localStorage.setItem(
          "player2wins",
          parseInt(localStorage.getItem("player2wins")) + 1
        );
      }
      setTimeout(() => {
        window.location.replace("/result");
      }, 300);
      return;
    }
    if (!checkWin() && cnt >= 9) window.location.replace("/draw");
  };
  const handleDraw = () => {
    localStorage.setItem("winner", "Draw");
    setTimeout(() => {
      window.location.replace("/draw");
    }, 800);
  };
  const handle = () => {
    setcnt(cnt + 1);
    handleClick();
    handleReset();
  };
  return (
    <>
      <div className="h-1/2 w-1/3 mt-20 bg-black flex flex-wrap">
        <div className="h-32 w-32 border-2 border-blue-950">
          <button
            className="bg-slate-500 h-32 w-32 p-4 border-2 border-blue-950 text-5xl font-bold dropshadow-lg cursor-pointer"
            id="1"
            onClick={handle}
          ></button>
        </div>
        <div className="h-32 w-32 border-2 border-blue-950">
          <button
            className="bg-slate-500 h-32 w-32 p-4 border-2 border-blue-950 text-5xl font-bold dropshadow-lg cursor-pointer"
            id="2"
            onClick={handle}
          ></button>
        </div>
        <div className="h-32 w-32  border-2 border-blue-950">
          <button
            className="bg-slate-500 h-32 w-32 p-4 border-2 border-blue-950 text-5xl font-bold dropshadow-lg cursor-pointer"
            id="3"
            onClick={handle}
          ></button>
        </div>
        <div className="h-32 w-32 border-2 border-blue-950">
          <button
            className="bg-slate-500 h-32 w-32 p-4 border-2 border-blue-950 text-5xl font-bold dropshadow-lg cursor-pointer"
            id="4"
            onClick={handle}
          ></button>
        </div>
        <div className="h-32 w-32 border-2 border-blue-950">
          <button
            className="bg-slate-500 h-32 w-32 p-4 border-2 border-blue-950 text-5xl font-bold dropshadow-lg cursor-pointer"
            id="5"
            onClick={handle}
          ></button>
        </div>
        <div className="h-32 w-32 border-2 border-blue-950">
          <button
            className="bg-slate-500 h-32 w-32 p-4 border-2 border-blue-950 text-5xl font-bold dropshadow-lg cursor-pointer"
            id="6"
            onClick={handle}
          ></button>
        </div>
        <div className="h-32 w-32 border-2 border-blue-950">
          <button
            className="bg-slate-500 h-32 w-32 p-4 border-2 border-blue-950 text-5xl font-bold dropshadow-lg cursor-pointer"
            id="7"
            onClick={handle}
          ></button>
        </div>
        <div className="h-32 w-32 border-2 border-blue-950">
          <button
            className="bg-slate-500 h-32 w-32 p-4 border-2 border-blue-950 text-5xl font-bold dropshadow-lg cursor-pointer"
            id="8"
            onClick={handle}
          ></button>
        </div>
        <div className="h-32 w-32 border-2 border-blue-950">
          <button
            className="bg-slate-500 h-32 w-32 p-4 border-2 border-blue-950 text-5xl font-bold dropshadow-lg cursor-pointer"
            id="9"
            onClick={handle}
          ></button>
        </div>
      </div>
      <Score />
      <div className="hidden" id="res">
        <Result />
      </div>
    </>
  );
}
