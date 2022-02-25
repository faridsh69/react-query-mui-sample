import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import NewBadge from '@components/NewBadge';
import { useStyles } from './styles';
import { IPodcast } from '@interfaces/podcast';

interface PodcastCardProps {
  podcast: IPodcast;
}

const PodcastCard: FC<PodcastCardProps> = ({ podcast: { image, title, itunes } }) => {
  const { classes } = useStyles();

  return (
    <Link href={`/shows/happy-place`} passHref>
      <Card component="a" className={`card ${classes.root}`}>
        <NewBadge position="top-left" display={false}>
          <figure className={classes.figure}>
            <Image src={image.url} alt={title} layout="fill" />
          </figure>
        </NewBadge>

        <CardContent className={classes.content}>
          {false && (
            <Typography variant="subtitle1" color="primary">
              <span className={classes.vp}>V+</span>
              <strong>New Episodes First</strong>
            </Typography>
          )}
          <Typography className="ellipses" variant="h5" component="p">
            {title}
          </Typography>
          <Typography variant="subtitle1" className="regular">
            {`${itunes.season ? `Season ${itunes.season} . ` : ''}`}
            {`${itunes.episode ? `${itunes.episode} Episodes` : ''}`}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PodcastCard;
