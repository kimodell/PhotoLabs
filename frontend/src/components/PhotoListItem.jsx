import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {

  const { id, location, imageSource, username, profile } = props;

  return (
    <li key={id}>
      <img src={imageSource} />
      <img src={profile} />
      <p>{username}</p>
      <p>{location.city}, {location.country}</p>
    </li>
  );
};

export default PhotoListItem;
