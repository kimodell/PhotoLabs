import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

//Homepage route to view photos and nav bar from homepage
const HomeRoute = (props) => {

  //Set inital state of liked photos to empty array
  const [likedPhotos, setLikedPhotos] = useState([]);

  //Function to check if photoID is already present in likedPhotos state, if not, add the photoID
  const toggleLike = function(photoId) {
    if (likedPhotos.includes(photoId)) {
      const updatedLikedPhotos = likedPhotos.filter(id => id !== photoId);
      setLikedPhotos(updatedLikedPhotos);
    } else {
      const updatedLikedPhotos = [...likedPhotos, photoId];
      setLikedPhotos(updatedLikedPhotos);
    }
  };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} likedPhotos={likedPhotos} />
      <PhotoList photos={props.photos} likedPhotos={likedPhotos} toggleLike={toggleLike} />
    </div>
  );
};

export default HomeRoute;
