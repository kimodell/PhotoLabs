import {useState} from 'react'



const useApplicationData = () => {
  const [state, setState] = useState({
    modalOpen: false,
    selectPhoto: {},
    likedPhotos: [],
  })

   //Change state of selected photo for modal based on modal toggle
  const toggleModal = (selectedPhoto) => {
    setState(prevState => ({
      ...prevState,
      modalOpen: !prevState.modalOpen,
    
    }));


    setState(prevState => ({
      ...prevState,
      selectPhoto: selectedPhoto,
    }));

    // let updatedSelectPhoto = {};

    // for (const photo of photos) {
    //   if (photo.id === photoID) {
    //     updatedSelectPhoto = { photo };
    //     // setSelectPhoto(updatedSelectPhoto);
    //     setState(prevState => ({
    //       ...prevState,
    //       selectPhoto: updatedSelectPhoto,
    //     }));
    //   };
    // }
  };


    //Function to check if photoID is already present in likedPhotos state, if not, add the photoID
  const toggleLike = function(photoId) {
    if (state.likedPhotos.includes(photoId)) {
      const copyOfFavorites = [...state.likedPhotos].filter(id => id !== photoId);
      setState(prevState => ({
        ...prevState,
        likedPhotos: copyOfFavorites,
      })
      )
      return
    }

    const updatedLikedPhotos = [...state.likedPhotos, photoId];
    setState(prevState => ({
      ...prevState,
      likedPhotos: updatedLikedPhotos,
    })
    )

    // if (state.likedPhotos.includes(photoId)) {
    //   const updatedLikedPhotos = state.likedPhotos.filter(id => id !== photoId);

    //   setState(prevState => ({
    //     ...prevState,
    //     likedPhotos: updatedLikedPhotos,
    //   })
    //   )
    // } else {
    //   const updatedLikedPhotos = [...likedPhotos, photoId];
    //   setState(prevState => ({
    //     ...prevState,
    //     likedPhotos: updatedLikedPhotos,
    //   })
    //   )
    // }
  
  };

  return {state, toggleModal, toggleLike}
}


export default useApplicationData