import React from "react";


function Challenge() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Challenge Page</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is the challenge page. You can add your content here.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Start Challenge
      </button>
    </div>
  );
}       
export default Challenge;