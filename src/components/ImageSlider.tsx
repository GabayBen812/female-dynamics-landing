import React, { useState } from 'react';
import '../CssFiles/mobileStyles.css';
import ImageSliderDots from './imageSliderDots';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToNext = (): void => {
    const isValidIndex = currentIndex < images.length - 1;
    setCurrentIndex(isValidIndex ? currentIndex + 1 : currentIndex);
  };

  const goToPrevious = (): void => {
    const isValidIndex = currentIndex > 0;
    setCurrentIndex(isValidIndex ? currentIndex - 1 : currentIndex);
  };

  return (
    <div className='imageSlider'>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className='imageSlideImg' />
      <div className='imageSliderBtns'>
        <button className='imageSlideBtn' style={{ backgroundColor: 'rgba(0, 0, 0, 0)', fontWeight: 'bolder' }} onClick={goToPrevious}>&lt;</button>
        <button className='imageSlideBtn' style={{ backgroundColor: 'rgba(0, 0, 0, 0)', fontWeight: 'bolder' }} onClick={goToNext}>&gt;</button>
      </div>
        <ImageSliderDots index={currentIndex} length={images.length} />
    </div>
  );
}

export default ImageSlider;
