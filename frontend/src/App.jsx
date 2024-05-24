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
  const [selectPhoto, setSelectPhoto] = useState([]);

  //Change state of selected photo for modal based on modal toggle
  const toggleModal = (photoID, photoUrl) => {
    setModalOpen(prevState => !prevState);

    const updatedSelectPhoto = [photoID, photoUrl];
    setSelectPhoto(updatedSelectPhoto);
  };

  return (
    <div className="App">
    <HomeRoute topics={topics} 
    photos={photos} 
    modalOpen={modalOpen} 
    setModalOpen={setModalOpen}
    toggleModal={toggleModal}
    selectPhoto={selectPhoto}/>
    {modalOpen && <PhotoDetailsModal modalOpen={modalOpen} toggleModal={toggleModal} selectPhoto={selectPhoto}/>}
  </div>
  );
};

export default App;