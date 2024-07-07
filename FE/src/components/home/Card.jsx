import React from 'react';
import { useNavigate } from 'react-router-dom';
 const Card = () => {
  const navigate=useNavigate();
  const handleClick = ()=>{
    navigate('/vote')
  }
  return (
    <div className="bg-gray-900 text-white py-10 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 max-w-2xl w-full mx-4 rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-duration="1000">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Proposal</h1>
        </header>
        <main className="mb-8">
          <section className="mb-6">
            <label htmlFor="title" className="block text-xl font-bold mb-2">
              Title agenda (less than 160 characters)
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              placeholder="Enter title..."
              data-aos="fade-right"
              data-aos-duration="800"
            />
          </section>
          <section className="mb-6" data-aos="fade-left" data-aos-duration="800">
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <textarea
              id="description"
              className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              placeholder="Enter description..."
              rows={4}
            />
          </section>
        </main>
        <footer className="text-center" data-aos="fade-up" data-aos-duration="1000">
          <button onClick={handleClick} className="bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex items-start">
            Vote
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Card;