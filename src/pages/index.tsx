import type { NextPage } from 'next';

import HomeContainer from '@containers/Home';
import HeadWrapper from '@components/HeadWrapper';

const HomePage: NextPage = () => (
  <HeadWrapper title="The Digital Marketing Agency For Talent">
    <HomeContainer />
  </HeadWrapper>
);

export default HomePage;
