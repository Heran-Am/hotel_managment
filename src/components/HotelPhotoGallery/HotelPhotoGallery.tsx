import { FC, useState } from 'react';
import Image from 'next/image';
import { Image as ImageType } from '@/models/room';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

const HotelPhotoGallery: FC<{ photos: ImageType[] }> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // corrected variable name

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
  const totalPhotos = photos.length;
  const displayPhotos = photos.slice(1, maximumVisiblePhotos - 1);
  const remainingPhotosCount = totalPhotos - maximumVisiblePhotos;

  return (
    <div className='container mx-auto'>
      {/* Your JSX code */}
    </div>
  );
};

export default HotelPhotoGallery;
