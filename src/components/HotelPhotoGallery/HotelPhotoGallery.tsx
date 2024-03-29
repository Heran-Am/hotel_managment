import { FC, useState } from 'react';
import Image from 'next/image';
import { Image as ImageType } from '@/models/room';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

const HotelPhotoGallery: FC<{ photos: ImageType[] }> = ({ photos }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (index: number) => {
  setShowModal(prevState => !prevState);
};

  };

  const closeModal = () => setShowModal(false);

  const handlePrevious = () => {
    // Handle previous logic
  };

  const handleNext = () => {
    // Handle next logic
  };

  const maximumVisiblePhotos = 4;
  const totalPhotos = photos.length;
  const displayPhotos = photos.slice(1, maximumVisiblePhotos - 1);
  const remainingPhotosCount = totalPhotos - maximumVisiblePhotos;

  return (
    <div className='container mx-auto'>
      <div className='grid md:grid-cols-2 relative gap-5 px-3'>
        {/* Render photos */}
        {displayPhotos.map((photo, index) => (
          <div
            key={index} // Ensure key prop is unique
            className='cursor-pointer h-64 rounded-2xl overflow-hidden'
            onClick={() => openModal(index)}
          >
            <Image
              width={150}
              height={150}
              src={photo.url}
              alt={`Room Photo ${index + 2}`}
              className='img scale-animation'
            />
          </div>
        ))}
        {/* Render remaining photos */}
        {remainingPhotosCount > 0 && (
          <div
            className='cursor-pointer relative h-64 rounded-2xl overflow-hidden'
            onClick={() => openModal(maximumVisiblePhotos)} // Determine correct index
          >
            {/* Render remaining photos */}
          </div>
        )}
      </div>
      {/* Modal component */}
      {showModal && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-[55]'>
          {/* Render modal content */}
        </div>
      )}
    </div>
  );
};

export default HotelPhotoGallery;
