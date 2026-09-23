import React, { useEffect, useState } from 'react';
import { getData, removedata } from '../localStorage.js';
import HorizontalAppCard from'../HorizontalAppCard/HorizontalAppCard.jsx'
import { ToastContainer } from 'react-toastify';
import vactor1 from "../assets/Vector (1).png"

const Installations = () => {
    const [allapps, setallapps] = useState([]);
    const [sort, setSort] = useState("");

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

    const handleRemove = (id) => {
        removedata(id);
        setallapps((apps) =>
            apps.filter((app) => String(app.id) !== String(id))
        );
    };

    const handleSort = (type) => {
        const sortedApps = [...allapps].sort((a, b) => {
            if (type === "size") {
                return a.size - b.size;
            }

            if (type === "download") {
                return a.downloads - b.downloads;
            }

            return 0;
        });

        setSort(type);
        setallapps(sortedApps);
    };
    return (
        <div>
            <div className='my-20 max-w-6xl mx-auto'>
                <h1 className='text-5xl font-bold text-center'>Your Installed Apps</h1>
                <p className='text-center pt-3'>Explore All Trending Apps on the Market developed by us.</p>
                <div className='flex justify-between'>
                    <div>

                    </div>
                    <div>
                        <details className="dropdown">
  <summary className="btn m-1">Sort By <img src={vactor1} alt="" /></summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><button type="button" onClick={() => handleSort("size")}>Size</button></li>
    <li><button type="button" onClick={() => handleSort("download")}>Download count</button></li>
  </ul>
</details>
                    </div>
                </div>
            </div>

            
                <div className='max-w-6xl mx-auto px-4 pb-10'>
                    {allapps.map((app) => (
                        <HorizontalAppCard
                            key={app.id}
                            app={app}
                            handleRemove={handleRemove}
                        />
                    ))}
                </div>
                <ToastContainer />
        </div>
    );
};

export default Installations;