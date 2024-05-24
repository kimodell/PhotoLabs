import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

//Component to display grid of photos
const PhotoList = (props) => {

  const { likedPhotos, toggleLike, modalOpen, setModalOpen, toggleModal} = props

  const parsedPhotos = props.photos.map((photo) => 
    <PhotoListItem 
    key={photo.id} 
    photo={photo}
    liked={likedPhotos.includes(photo.id)} 
    toggleLike={() => toggleLike(photo.id)}
    modalOpen={modalOpen}
    setModalOpen={setModalOpen}
    toggleModal={toggleModal} 
    />
    )

    
  return (
    <ul className="photo-list">
      {parsedPhotos}
    </ul>
  );
};

export default PhotoList;
