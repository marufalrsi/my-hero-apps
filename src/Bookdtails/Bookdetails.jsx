import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';
import review from '../assets/icon-review.png';
import Chart from '../Chart/Chart.jsx';
import { getData, setdata } from '../localStorage.js';
import { ToastContainer, toast } from 'react-toastify';

const Bookdetails = () => {
    const { id } = useParams();
    const [appData, setAppData] = useState([]);
    const [isInstalled, setIsInstalled] = useState(() =>
        getData().includes(String(id))
    );

    useEffect(() => {
        Promise.all([
            fetch('/Allapp.json').then((res) => res.json()),
            fetch('/Home.json').then((res) => res.json()),
        ]).then(([allApps, homeApps]) => {
            setAppData([...allApps, ...homeApps]);
        });
    }, []);
    const oneapp = appData.find((app) => app.id == id);
    console.log(oneapp);
    const { companyName,description
, image, title, downloads,ratingAvg,reviews,ratings,
size

 } = oneapp || {};
 const data = ratings;
 const notify = () => toast("installing");
 const handleinstall =(id)=>{
     if(!isInstalled){
       setdata(id)
         setIsInstalled(true);
     notify();}
 }
    return (
        <div className="max-w-6xl mx-auto mt-10">
        <div className="flex gap-10">
            <figure>
                <img className='h-80 w-80' src={image} alt={title} />
            </figure>
            <div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <h1 className='text-xl mt-3.5'>develop by:<span className='bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent'>{companyName}</span></h1>
            <hr className='my-10' />
            <div className="flex justify-between gap-20 mb-7">
                <div>
                    <img src={download} alt="Download" />
                    <h1>Downloads</h1>
                    <h1 className='font-extrabold text-4xl'>{downloads}</h1>
                </div>
                <div>
                    <img src={rating} alt="Rating" />
                    <h1>Average Ratings</h1>
                    <h1 className='font-extrabold text-4xl'>{ratingAvg}</h1>
                </div>
                <div>
                    <img src={review} alt="Review" />
                    <h1>Total Reviews</h1>
                    <h1 className='font-extrabold text-4xl'>{reviews}</h1>
                </div>
            </div>
            <button onClick={()=>handleinstall(id)} className="btn btn-success">{isInstalled ? "Installed" : `Install Now (${size} MB)`}</button>
            </div>
        </div>
        <div className='mt-10'>
             <h1 className='text-2xl font-semibold'>Ratings</h1>
             <Chart data={data}></Chart>
        </div>
        <div className='mt-10'>
             <h1 className='text-2xl font-semibold'>Description</h1>
             <h1 className='py-3 text-justify'>{description}
</h1>
        </div>
         <ToastContainer />
        </div>
    );
};

export default Bookdetails;