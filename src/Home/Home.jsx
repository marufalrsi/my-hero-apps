import React from 'react';
import playstore from '../assets/Group.png';
import appstore from '../assets/Group (1).png';
import hero from '../assets/hero.png';
import { Link } from 'react-router';
import Appsview from '../Appsview/Appsview';
import { Suspense } from 'react';

const Home = () => {
    const appdata = fetch('/Home.json').then((res) => res.json());
    return (
        <div>
            <div className='text-center mt-10 mx-auto max-w-6xl'>
                <h1 className='text-7xl font-semibold mb-4'>We Build <br/>
<span className='bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold'>Productive</span> Apps</h1>
<p className='text-mauve-300'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex justify-center my-10'>
                <button className="btn mr-5">
                    <img src={playstore} alt="Google Play" />playstore
                </button>
                <button className="btn ml-5">
                    <img src={appstore} alt="App Store" />appstore
                </button>
            </div>
            <figure className='flex justify-center'>
                <img src={hero} alt="Hero Image" />
            </figure>
           <div className=' bg-linear-90 from-indigo-500 to-purple-500 text-white py-20 max-w-6xl mx-auto'>
            <h1 className='text-5xl font-bold text-center'>Trusted by Millions, Built for You</h1>
            <div className='flex justify-around mt-10 text-center'>
                <div>
                    <p>Total Downloads</p>
                   <h1 className='text-6xl font-extrabold'>29.6M</h1>
                   <p>21% more than last month</p>
                </div>
                <div>
                <p>Total Reviews</p>
                    <h1 className='text-6xl font-extrabold'>906K</h1>
                    <p>46% more than last month</p>
                </div>
                <div>
                <p>Active Apps</p>
                    <h1 className='text-6xl font-extrabold'>132+</h1>
                    <p>31 more will Launch</p>
                </div>
            </div>
           </div>
           <div className='my-20 max-w-6xl mx-auto'>
            <h1 className='text-5xl font-bold text-center'>Trending Apps</h1>
            <p className='text-center pt-3'>Explore All Trending Apps on the Market developed by us.</p>
           </div>
           <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            <Appsview appdata={appdata} />
           </Suspense>
           <div className='flex justify-center my-10'>
              <Link to="/apps" className="btn bg-linear-90 from-indigo-500 to-purple-500 text-white">Show All</Link>
              </div>
        </div>
    );
};

export default Home;