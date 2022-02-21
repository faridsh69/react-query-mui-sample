import { FC } from 'react';
import Typography from '@mui/material/Typography';

import PodcastCard from '@components/PodcastCard';
import Carousel from '@components/Carousel';

interface MultiSliderProps {
  title: string;
  leftPadding?: boolean;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.5,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const MultiSlider: FC<MultiSliderProps> = ({ title, leftPadding }) => {
  return (
    <div className={`slider ${leftPadding ? 'padding-left' : ''}`}>
      <Typography className="regular" variant="h2" component="p" mb="1.8rem">
        {title}
      </Typography>

      <Carousel draggable={false} responsive={responsive}>
        <PodcastCard
          slug="happy-place"
          title="The Happy Place"
          description="Seasons 2 • 88 Episodes"
          image="/images/poster.png"
          isNew
        />
        <PodcastCard
          slug="happy-place"
          title="Absolutely Mental"
          description="Seasons 1 • 120 Episodes"
          image="/images/absolute-mental.jpg"
        />
        <PodcastCard
          slug="happy-place"
          title="Under The Skin"
          description="Seasons 1 • 120 Episodes"
          image="/images/under-the-skin.jpg"
          viral
        />
        <PodcastCard
          slug="happy-place"
          title="The Happy Place"
          description="Seasons 2 • 88 Episodes"
          image="/images/poster.png"
          isNew
        />
        <PodcastCard
          slug="happy-place"
          title="Absolutely Mental"
          description="Seasons 1 • 120 Episodes"
          image="/images/absolute-mental.jpg"
        />
        <PodcastCard
          slug="happy-place"
          title="Under The Skin"
          description="Seasons 1 • 120 Episodes"
          image="/images/under-the-skin.jpg"
          viral
        />
      </Carousel>
    </div>
  );
};

MultiSlider.defaultProps = {
  leftPadding: true
};

export default MultiSlider;
