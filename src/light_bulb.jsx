import React, { useState } from "react";
import lightbulbTrue from "./assets/lightbulbtrue.png";
import lightbulbFalse from "./assets/lightbulbfalse.png";

function LightBulb() {
  const [lightbulb, updateLightBulb] = useState(false);

  const getImageSource = () => {
    return lightbulb ? lightbulbTrue : lightbulbFalse;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black ">
      <img
        src={getImageSource()}
        alt="Light Bulb"
        className={lightbulb ? "filter drop-shadow-2xl w-half" : "w-half"}
      />
      <button
        onClick={() => {
          updateLightBulb(!lightbulb);
        }}
        className="my-10 bg-emerald-700 text-white justify-center py-2 px-4 rounded-full focus:outline-none hover:bg-emerald-900"
      >
        Toggle
      </button>
    </div>
  );
}

export default LightBulb;
