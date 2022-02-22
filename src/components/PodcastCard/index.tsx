import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import NewBadge from '@components/NewBadge';
import { useStyles } from './styles';

interface PodcastCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  viral?: boolean;
  isNew?: boolean;
}

const PodcastCard: FC<PodcastCardProps> = ({ title, description, image, slug, viral, isNew }) => {
  const { classes } = useStyles();

  return (
    <Link href={`/shows/${slug}`} passHref>
      <Card component="a" className={classes.root}>
        <NewBadge position="top-left" display={isNew}>
          <figure className={classes.figure}>
            <Image src={image} alt={title} layout="fill" />
          </figure>
        </NewBadge>

        <CardContent className={classes.content}>
          {viral && (
            <Typography variant="subtitle1" color="primary">
              <span className={classes.vp}>V+</span>
              <strong>New Episodes First</strong>
            </Typography>
          )}
          <Typography variant="h5" component="p">
            {title}
          </Typography>
          <Typography variant="subtitle1" className="regular">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PodcastCard;
