import React, { useEffect, useState } from 'react';
import { getData } from '../localStorage.js';
import HorizontalAppCard from'../HorizontalAppCard/HorizontalAppCard.jsx'

const Installations = () => {
    const [allapps, setallapps] = useState([]);

    useEffect(() => {
        const installedIds = getData();

        Promise.all([
            fetch('/Allapp.json').then((res) => res.json()),
            fetch('/Home.json').then((res) => res.json())
        ])
            .then(([data1, data2]) => {
                const combinedApps = [...data1, ...data2];
                const installedApps = combinedApps.filter((app) =>
                    installedIds.includes(String(app.id))
                );
                setallapps(installedApps);
            })
    }, []);

    return (
        <div>
            <div className='my-20 max-w-6xl mx-auto'>
                <h1 className='text-5xl font-bold text-center'>Your Installed Apps</h1>
                <p className='text-center pt-3'>Explore All Trending Apps on the Market developed by us.</p>
            </div>

            {!allapps.length ? (
                <div className='max-w-6xl mx-auto px-4 pb-10 text-center text-gray-500'>
                    No installed apps yet.
                </div>
            ) : (
                <div className='max-w-6xl mx-auto px-4 pb-10'>
                    {allapps.map((app) => (
                        <HorizontalAppCard key={app.id} app={app} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Installations;