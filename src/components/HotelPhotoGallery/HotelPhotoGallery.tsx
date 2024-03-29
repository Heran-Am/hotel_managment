import { FC, useState } from 'react';
import Image from 'next/image';
import { Image as ImageType } from '@/models/room';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

const HotelPhotoGallery: FC<{ photos: ImageType[] }> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const maximumVisiblePhotos = 4;
  const displayPhotos = photos.slice(1, maximumVisiblePhotos - 1);

  return (
    <div className='container mx-auto'>
      {/* Your JSX code */}
      {displayPhotos.map((photo, index) => (
        <div key={index} className='cursor-pointer h-64 rounded-2xl overflow-hidden'>
          <Image
            width={150}
            height={150}
            src={photo.url}
            alt={`Room Photo ${index + 2}`}
            className='img scale-animation'
          />
        </div>
      ))}
      <div
        className='cursor-pointer relative h-64 rounded-2xl overflow-hidden'
        onClick={() => openModal(maximumVisiblePhotos)}
      >
        {/* Content */}
      </div>
    </div>
  );
};

export default HotelPhotoGallery;
