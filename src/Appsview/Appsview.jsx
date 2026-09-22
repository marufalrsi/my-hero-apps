import React from 'react';
import { use } from 'react';
import Appcard from '../AppCard/Appcard';

const Appsview = ({ appdata }) => {
    const appData = use(appdata);
    console.log(appData);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto px-4'>
            {appData.map((app) => (
                <Appcard key={app.id} app={app}>
                </Appcard>
            ))}
        </div>
    );
};

export default Appsview;