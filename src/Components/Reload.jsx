import React from "react";

export default function Reload() {
  return (
    <div className="mt-10">
      <a
        href="/"
        className="p-5 text-3xl text-white bg-blue-950 rounded-lg drop-shadow-2xl m-4"
        onClick={() => {
          localStorage.clear();
        }}
      >
        Restart
      </a>
      <a
        href="/play"
        className="p-5 text-3xl text-white bg-blue-950 rounded-lg drop-shadow-2xl m-4"
        onClick={() => {
          localStorage.removeItem("winner");
        }}
      >
        Replay
      </a>
    </div>
  );
}
