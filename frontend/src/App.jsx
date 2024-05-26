import React, { useEffect } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
// import topics from 'mocks/topics';
// import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, toggleModal, toggleLike, fetchPhotosByTopic } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute topics={state.topicData}
        photos={state.photoData}
        modalOpen={state.modalOpen}
        toggleModal={toggleModal}
        selectPhoto={state.selectPhoto}
        toggleLike={toggleLike} 
        likedPhotos={state.likedPhotos} 
        fetchPhotosByTopic={fetchPhotosByTopic}
       />
      {state.modalOpen &&
        <PhotoDetailsModal
          modalOpen={state.modalOpen}
          toggleModal={toggleModal}
          selectPhoto={state.selectPhoto}
          toggleLike={toggleLike}
          likedPhotos={state.likedPhotos}
        />}
    </div>
  );
};

export default App;