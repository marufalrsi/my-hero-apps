import React from 'react';
import error from "../assets/error-404.png";
import { Link } from 'react-router';

const Error = () => {
    return (
        
            <div className="flex flex-col justify-center items-center h-screen">
      <img src={error} alt="Error 404" />
      <h1 className="text-5xl font-bold">Oops! Page Not Found</h1>
      <p className="text-gray-500 py-3">The page you are looking for does not exist.</p>
      <Link to="/" className="btn bg-linear-90 from-indigo-500 to-purple-500 text-white">Go Back!</Link>
    </div>
        
    );
};

export default Error;