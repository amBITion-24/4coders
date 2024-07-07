import React from 'react';

const Proposals = () => {
  const proposals = [1, 2, 3, 4, 5, 6];

  return (
    <div className="bg-gray-900 text-white py-10 min-h-screen">
      <h1 className="text-4xl mb-8 text-center">Proposals</h1>
      <div className="flex flex-wrap justify-around">
        {proposals.map((_, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 m-4 max-w-sm text-center">
            <h2 className="text-2xl mb-4">Title</h2>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md cursor-pointer">
                In agreement
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md cursor-pointer">
                In Disagreement
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proposals;
