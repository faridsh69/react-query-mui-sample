import type { NextPage } from 'next';

import PodcastContainer from '@containers/Podcast';
import HeadWrapper from '@components/HeadWrapper';

const PodcastPage: NextPage = () => (
  <HeadWrapper title="Shows | Podcast">
    <PodcastContainer />
  </HeadWrapper>
);

export default PodcastPage;
