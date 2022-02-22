import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useStyles } from './styles';

interface PodcastCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const NewsCard: FC<PodcastCardProps> = ({ title, description, image, slug }) => {
  const { classes } = useStyles();

  return (
    <Card className={classes.root}>
      <figure className={classes.figure}>
        <Image src={image} alt={title} layout="fill" />
      </figure>

      <CardContent className={classes.content}>
        <Typography className="medium" variant="h6" mb="1rem">
          {title}
        </Typography>
        <Typography variant="subtitle1" className="regular">
          {description}
        </Typography>

        <Link passHref href={`/news/${slug}`}>
          <Button aria-label="underline" component="a" className={classes.btn}>
            Read article
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
