import React from "react";
import Reload from "./Reload";

export default function Draw() {
  return (
    <>
      <div className="min-h-screen min-w-full text-center flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl">It's a</h1>
        <h1 className="text-9xl">DRAW</h1>
        <Reload />
      </div>
    </>
  );
}
