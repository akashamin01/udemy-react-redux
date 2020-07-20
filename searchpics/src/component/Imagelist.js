import React from 'react';
import './Imagelist.css';
import Imagecard from './Imagecard.js';

const Imagelist = (props) => {
  const images = props.images.map((image) =>{
    return <Imagecard key={image.id} image={image.imageRef}/>
  }) ;
  return <div className="image-list">{images}</div>;
};

 export default Imagelist;
