import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

//component to render modal when specified photo is clicked

const PhotoDetailsModal = (props) => {

  const { toggleModal, selectPhoto, likedPhotos, toggleLike } = props;

  const { urls, user, location, similar_photos } = selectPhoto.photo;

  const similarPhotos = Object.values((similar_photos));


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        <div className="photo-details-modal__fav-icon">
        <PhotoFavButton toggleFavourite={toggleLike} photoId={selectPhoto.photo.id} favourites={likedPhotos} />
        </div>
        <div className="photo-details-modal__image-container">
        <img className="photo-details-modal__image" src={urls.full} ></img>
        </div>
        <div className="photo-details-modal__top-bar">
          <img className="photo-details-modal__photographer-profile" src={user.profile}></img>
            <div className="photo-details-modal__photographer-info">
              <span>{user.name}</span>
              <div className="photo-details-modal__photographer-location">
                <span>{location.city}</span>
                <>, </>
                <span>{location.country}</span>
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
          photos={similarPhotos}
          likedPhotos={likedPhotos}
          toggleLike={toggleLike}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
