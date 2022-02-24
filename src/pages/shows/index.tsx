import type { NextPage } from 'next';
import { dehydrate } from 'react-query';

import ShowsContainer from '@containers/Shows';
import HeadWrapper from '@components/HeadWrapper';
import { getQueryClient, queryKeys } from '@utils/helpers';
import { getPodcasts } from '@lib/podcast';

const ShowsPage: NextPage = () => (
  <HeadWrapper title="Shows">
    <ShowsContainer />
  </HeadWrapper>
);

export async function getStaticProps() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(queryKeys.podcast.list(), () => getPodcasts());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}

export default ShowsPage;
