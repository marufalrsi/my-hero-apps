import React from 'react';
import { use,useState } from 'react';
import Appcard from '../AppCard/Appcard';
import Nobook from '../Nobook/Nobook'

const Appsview = ({ appdata }) => {
    const [search, setSearch] = useState("");
    const appData = use(appdata);
    const normalizedSearch = search.trim().toLowerCase();
    const filteredApps = appData.filter((app) =>
        app.title.toLowerCase().includes(normalizedSearch)
    );
    const visibleApps = normalizedSearch ? filteredApps : appData;
   

    return (
        <div>
            <div className='flex justify-between max-w-6xl mx-auto my-2'>
            <div>
               <h1>({visibleApps.length}) Apps Found</h1> 
            </div>
            <div>
             <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" value={search}
                onChange={(e) => setSearch(e.target.value)}/>
</label>
            </div>
           </div>
        
            {visibleApps.length === 0 ? (
                <Nobook />
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto px-4'>
                    {visibleApps.map((app) => (
                        <Appcard key={app.id} app={app}>
                        </Appcard>
                    ))}
                </div>
            )}
        </div>

    );
};

export default Appsview;