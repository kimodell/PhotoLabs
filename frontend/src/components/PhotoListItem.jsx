import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {

  const { photo } = props

  return (
    <li className="photo-list__item" key={photo.id}>
      <PhotoFavButton />
      <img className="photo-list__image" src={photo.urls.regular}></img>
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

// {
//   "photo": {
//     "id": "1",
//     "location": {
//       "city": "Montreal",
//       "country": "Canada"
//     },
//     "urls": {
//       "full": "/Image-1-Full.jpeg",
//       "regular": "/Image-1-Regular.jpeg"
//     },
//     "user": {
//       "id": "1",
//       "username": "exampleuser",
//       "name": "Joe Example",
//       "profile": "/profile-1.jpg"
//     }
//   }
// }