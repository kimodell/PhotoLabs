import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

//Homepage route to view photos and nav bar from homepage
const HomeRoute = ({topics, photos, likedPhotos, toggleLike, modalOpen, toggleModal, selectPhoto, fetchPhotosByTopic}) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} likedPhotos={likedPhotos} fetchPhotosByTopic={fetchPhotosByTopic} />
      <PhotoList photos={photos} 
      likedPhotos={likedPhotos} 
      toggleLike={toggleLike}
      modalOpen = {modalOpen}
      toggleModal={toggleModal}
      selectPhoto={selectPhoto}
       />
    </div>
  );
};

export default HomeRoute;
