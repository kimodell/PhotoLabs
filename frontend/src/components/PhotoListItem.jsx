import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

//Component to display a single photo
const PhotoListItem = (props) => {

  const { photo, liked, toggleLike, toggleModal } = props;

  return (
    <li className="photo-list__item" key={photo.id}>
      <PhotoFavButton liked={liked} toggleLike={toggleLike} />
      <img className="photo-list__image" src={photo.urls.regular} onClick={() => toggleModal(photo.id, photo.urls.full)}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile}></img>
        <div className="photo-list__user-info">
          <span>{photo.user.username}</span>
          <div className="photo-list__user-location">
            <span>{photo.location.city}</span>
            <span>{photo.location.country}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
