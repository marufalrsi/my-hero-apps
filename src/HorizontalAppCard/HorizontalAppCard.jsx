import React from 'react';
import download from '../assets/icon-downloads.png';
import star from '../assets/icon-ratings.png';


const HorizontalAppCard = ({ app, handleRemove }) => {
  console.log(app);
  const{image,title,downloads,ratingAvg,id,size
} = app;
    return (
        <div className='flex justify-between items-center my-5 px-5 bg-gray-50 rounded-2xl'>
            <div className='flex justify-center items-center'>
                <div>
            <figure className="px-3 pt-3">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl h-20 w-20" />
  </figure>

                </div>
            <div>
                 <h1 className='text-2xl font-bold'>{title}</h1>
                <div className="flex justify-between items-center pb-3 gap-4">
                  <button className="btn btn-soft btn-success btn-xs"><img src={download} alt="Download" className="w-4 h-4 mr-2" /> {downloads}</button>
                 <button className="btn btn-soft btn-warning btn-xs"><img src={star} alt="Rating" className="w-4 h-4 mr-2" /> {ratingAvg}</button>
                 <h1 className='text-gray-500 text-sm'>{size}MB</h1>
                </div>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemove(id)} className="btn btn-success">uninstall</button>
            </div>
        </div>
    );
};

export default HorizontalAppCard;