import React from 'react';
import Appsview from '../Appsview/Appsview';
import { Suspense } from 'react';

const Apps = () => {
    const appdata = fetch('Allapp.json').then(res => res.json())
    return (
        <div>
            <div className='my-20 max-w-6xl mx-auto'>
            <h1 className='text-5xl font-bold text-center'>Trending Apps</h1>
            <p className='text-center pt-3'>Explore All Trending Apps on the Market developed by us.</p>
           </div>
           
           <Suspense fallback={<div className="text-center py-10 font-bold text-9xl">Loading...</div>}>
            <Appsview appdata={appdata} />
           </Suspense>
        </div>
    );
};

export default Apps;