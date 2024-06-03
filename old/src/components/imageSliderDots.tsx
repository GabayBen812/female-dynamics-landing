import React from 'react';
import '../CssFiles/mobileStyles.css';
import DotRegular from '../assets/dotRegular.png'

interface ImageSliderDotsProps {
  index: number;
  length: number;
}

const ImageSliderDots: React.FC<ImageSliderDotsProps> = ({ index, length }) => {
    return (
        <div className='imageSliderDots'>
          {Array.from({ length }, (_, i) => 
            i === index ? <img src={DotRegular} key={i} className='dotBolder' alt='dot'></img> : <img src={DotRegular} key={i} className='dotRegular'></img>
          )}
        </div>
      );
    };

export default ImageSliderDots;
