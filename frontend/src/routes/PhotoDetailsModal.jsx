import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

//compoenent to render modal when specified photo is clicked

const PhotoDetailsModal = (props) => {

  const { toggleModal, selectPhoto } = props

  console.log(selectPhoto)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
