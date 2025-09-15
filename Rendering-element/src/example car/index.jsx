import React, { useState } from "react";

export default function RenderCar() {
  const [color, setColor] = useState("steel");

  const renderUI = () => {
    return (
      <>
        <div className="container">
          <div className="mb-5">
            <img
              className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
              src={`/images/${color}-car.jpg`}
              alt="car"
              width={300}
            />
          </div>
          <div>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              onClick={() => setColor("red")}
            >
              Red Car
            </button>

            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              onClick={() => setColor("black")}
            >
              Black Car
            </button>

            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              onClick={() => setColor("silver")}
            >
              Silver Car
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <h1 className="text-5xl mb-10">Change color car</h1>
      {renderUI()}

    </div>
  );
}
