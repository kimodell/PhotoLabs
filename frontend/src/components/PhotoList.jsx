import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

//Component to display grid of photos
const PhotoList = (props) => {

  const parsedPhotos = props.photos.map((photo) => 
    <PhotoListItem 
    key={photo.id} 
    photo={photo} 
    />
    )

    
  return (
    <ul className="photo-list">
      {parsedPhotos}
    </ul>
  );
};

export default PhotoList;
