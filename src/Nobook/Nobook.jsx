import React from 'react';
import { Link } from 'react-router';
import notfound from "../assets/App-Error.png";

const Nobook = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
      <img src={notfound} alt="App Not Found" />
      <h1 className="text-5xl font-bold">Oops! App Not Found</h1>
      <p className="text-gray-500 py-3">The app you are looking for does not exist.</p>
      <Link to="/" className="btn bg-linear-90 from-indigo-500 to-purple-500 text-white">Go Back!</Link>
    </div>
    );
};

export default Nobook;