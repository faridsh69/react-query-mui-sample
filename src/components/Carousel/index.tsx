import { FC } from 'react';
import Carousel, { ArrowProps, CarouselProps } from 'react-multi-carousel';
import IconButton from '@mui/material/IconButton';
import 'react-multi-carousel/lib/styles.css';

import { SVG } from '@assets/icons/svgIcons';

interface CustomArrowProps extends ArrowProps {
  position: 'right' | 'left';
}

const CustomArrow: FC<CustomArrowProps> = ({ onClick, position }) => {
  return (
    <IconButton className={`slider-arrow ${position}`} onClick={onClick}>
      <SVG id="arrow-right" />
    </IconButton>
  );
};

const CustomCarousel: FC<CarouselProps> = ({ children, ...props }) => {
  return (
    <Carousel
      autoPlaySpeed={30000}
      {...props}
      customLeftArrow={<CustomArrow position="left" />}
      customRightArrow={<CustomArrow position="right" />}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
