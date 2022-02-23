import type { NextPage } from 'next';

import ShowsContainer from '@containers/Shows';
import HeadWrapper from '@components/HeadWrapper';

const ShowsPage: NextPage = () => (
  <HeadWrapper title="Shows">
    <ShowsContainer />
  </HeadWrapper>
);

export default ShowsPage;
