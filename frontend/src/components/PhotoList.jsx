import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

//Component to display grid of photos
const PhotoList = ({ photos, likedPhotos, toggleLike, toggleModal, selectPhoto }) => {

  const parsedPhotos = photos.map((photo) =>
    <PhotoListItem
      key={photo.id}
      photoId={photo.id}
      photo={photo}
      likedPhotos={likedPhotos}
      toggleLike={toggleLike}
      toggleModal={toggleModal}
      selectPhoto={selectPhoto}
    />
  );


  return (
    <ul className="photo-list">
      {parsedPhotos}
    </ul>
  );
};

export default PhotoList;
