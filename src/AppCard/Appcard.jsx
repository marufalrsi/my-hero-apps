import React from 'react';
import download from '../assets/icon-downloads.png';
import star from '../assets/icon-ratings.png';
import { Link } from 'react-router';

const Appcard = ({ app }) => {
  console.log(app);
  const{image,title,downloads,ratingAvg,id
} = app;
    return (
      <div>
        
    <Link to={`/bookdetail/${id}`} className="card bg-base-100 w-full shadow-sm">
  <figure className="px-3 pt-3 h-60">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
  </div>
  <div className="flex justify-between items-center px-3 pb-3">
  <button className="btn btn-soft btn-success btn-xs"><img src={download} alt="Download" className="w-4 h-4 mr-2" /> {downloads}</button>
 <button className="btn btn-soft btn-warning btn-xs"><img src={star} alt="Rating" className="w-4 h-4 mr-2" /> {ratingAvg}</button>
</div>
</Link>
</div>
    );
};

export default Appcard;