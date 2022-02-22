import { FC } from 'react';
import { styled } from '@mui/system';

import NewsSlider from '@components/MultiSlider';

const Root = styled('div')(() => ({
  paddingTop: '10rem',
  paddingBottom: '9.4rem'
}));

const ViralNews: FC = () => {
  return (
    <Root>
      <NewsSlider type="news" title="Viral Tribe News" />
    </Root>
  );
};

export default ViralNews;
