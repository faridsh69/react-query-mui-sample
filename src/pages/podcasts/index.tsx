import type { NextPage, GetStaticProps } from 'next';
import { dehydrate } from 'react-query';

import CreatorPodcastsContainer from '@containers/CreatorPodcasts';
import { getQueryClient, queryKeys } from '@utils/helpers';
import { getPodcasts } from '@lib/podcast';

const PodcastsPage: NextPage = () => <CreatorPodcastsContainer />;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(queryKeys.podcast.list(), () => getPodcasts());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

export default PodcastsPage;
