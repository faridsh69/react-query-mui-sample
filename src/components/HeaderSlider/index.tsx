import { FC } from 'react';

import Carousel from '@components/Carousel';
import { useStyles } from './styles';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

interface HeaderSliderProps {
  gutterBottom?: 'md' | 'lg';
}

const HeaderSlider: FC<HeaderSliderProps> = ({ children, gutterBottom = 'md' }) => {
  const { classes } = useStyles();

  return (
    <Carousel
      containerClass={classes.slider}
      itemClass={classes.sliderItem}
      dotListClass={`${classes.sliderDotList} ${gutterBottom}`}
      draggable={false}
      arrows={false}
      responsive={responsive}
      deviceType="desktop"
      showDots
      ssr
    >
      {children}
    </Carousel>
  );
};

export default HeaderSlider;
