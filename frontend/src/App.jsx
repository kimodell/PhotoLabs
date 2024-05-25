import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  //Use sate to open or close modal, display modal if modalOpen is true
  const [modalOpen, setModalOpen] = useState(false);

  //Use state to pass selected photo details to modal
  const [selectPhoto, setSelectPhoto] = useState({});

  //Change state of selected photo for modal based on modal toggle
  const toggleModal = (photoID) => {
    setModalOpen(prevState => !prevState);

    let updatedSelectPhoto = {};

    for (const photo of photos) {
      if (photo.id === photoID) {
        updatedSelectPhoto = { photo };
        setSelectPhoto(updatedSelectPhoto);
      };
    }
  };

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
    <div className="App">
      <HomeRoute topics={topics}
        photos={photos}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        toggleModal={toggleModal}
        selectPhoto={selectPhoto}
        toggleLike={toggleLike} 
        likedPhotos={likedPhotos}  />
      {modalOpen &&
        <PhotoDetailsModal
          modalOpen={modalOpen}
          toggleModal={toggleModal}
          selectPhoto={selectPhoto}
          toggleLike={toggleLike}
          likedPhotos={likedPhotos}
        />}
    </div>
  );
};

export default App;