import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import PodcastContainer from '@containers/Podcast';
import HeadWrapper from '@components/HeadWrapper';
import { getPodcastBySlug } from '@lib/podcast';
import { IPodcast } from '@interfaces/podcast';

interface PodcastPageProps {
  podcast: IPodcast;
}

const PodcastPage: NextPage<PodcastPageProps> = ({ podcast }) => (
  <HeadWrapper title={`Shows | ${podcast.title}`}>
    <PodcastContainer podcast={podcast} />
  </HeadWrapper>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.podcast && typeof params?.podcast === 'string' ? params.podcast : '';

  const podcast = await getPodcastBySlug(slug);

  if (!podcast) {
    return { notFound: true };
  }

  return {
    props: {
      podcast
    },
    revalidate: 10
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // TODO: Add podcast's slugs
    paths: [],
    fallback: 'blocking'
  };
};

export default PodcastPage;
