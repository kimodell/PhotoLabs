import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

//Component to render modal when specified photo is clicked

const PhotoDetailsModal = ({ toggleModal, selectPhoto, likedPhotos, toggleLike }) => {

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        <div className="photo-details-modal__fav-icon">
          <PhotoFavButton toggleLike={toggleLike} photoId={selectPhoto.id} likedPhotos={likedPhotos} />
        </div>
        <img className="photo-details-modal__image" src={selectPhoto.urls.full} ></img>
        <div className="photo-details-modal__top-bar">
          <img className="photo-details-modal__photographer-profile" src={selectPhoto.user.profile}></img>
          <div className="photo-details-modal__photographer-info">
            <span>{selectPhoto.user.name}</span>
            <div className="photo-details-modal__photographer-location">
              <span>{selectPhoto.location.city}</span>
              <>, </>
              <span>{selectPhoto.location.country}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="photo-details-modal__border"></div>

      <div className="photo-details-modal__header">
        <h2>Similar Photos</h2>
      </div>
      <div className="photo-details-modal__images">
        <PhotoList
          photos={Object.values(selectPhoto.similar_photos)}
          likedPhotos={likedPhotos}
          toggleLike={toggleLike}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
