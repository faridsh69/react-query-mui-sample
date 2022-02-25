import { FC } from 'react';
import dynamic from 'next/dynamic';
import Typography from '@mui/material/Typography';

import Carousel from '@components/Carousel';
import { IPodcast } from '@interfaces/podcast';
const PodcastCard = dynamic(() => import('@components/PodcastCard'));
const NewsCard = dynamic(() => import('@components/NewsCard'));

interface MultiSliderProps {
  title: string;
  items: IPodcast[];
  leftPadding?: boolean;
  type?: 'news' | 'podcast';
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4.4,
    slidesToSlide: 2
  },
  laptop: {
    breakpoint: { max: 1300, min: 1000 },
    items: 3.7,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 1000, min: 460 },
    items: 2.5,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 460, min: 0 },
    items: 1.5,
    slidesToSlide: 1
  }
};

const TEMP_NEWS = [
  {
    slug: 'happy-place',
    image: '/images/ben.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    slug: 'happy-place',
    image: '/images/news-pic.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  }
];

const MultiSlider: FC<MultiSliderProps> = ({ title, items, leftPadding, type }) => {
  return (
    <div className={`slider ${leftPadding ? 'padding-left' : ''}`}>
      <Typography className="regular" variant="h2" component="p" mb="1.8rem">
        {title}
      </Typography>

      <Carousel draggable={false} responsive={responsive}>
        {type == 'podcast'
          ? items.map(p => <PodcastCard key={p.title} podcast={p} />)
          : TEMP_NEWS.concat(TEMP_NEWS)
              .concat(TEMP_NEWS)
              .map(n => <NewsCard key={n.title} {...n} />)}
      </Carousel>
    </div>
  );
};

MultiSlider.defaultProps = {
  leftPadding: true,
  type: 'podcast'
};

export default MultiSlider;
