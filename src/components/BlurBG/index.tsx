import { FC } from 'react';
import { styled } from '@mui/material/styles';

interface BlurBackgroundProps {
  img: string;
  size?: 'md' | 'lg';
  transparent?: 'true';
}

const styleConfig = {
  lg: {
    height: '69rem',
    backgroundSize: '100%',
    backgroundPosition: '100% 55%',
    paddingLeft: '3rem'
  },
  md: {
    height: '61.3rem',
    backgroundSize: '112%',
    backgroundPosition: '50% 50%',
    paddingLeft: 0
  }
};

const Root = styled('div')<BlurBackgroundProps>(({ img, size = 'lg', transparent }) => ({
  ...styleConfig[size],
  backgroundImage: `url(${img})`,
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  paddingRight: '14rem',
  display: 'flex',

  '& > div.filter': {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backdropFilter: `blur(${transparent ? '3rem' : '1.5rem'})`,
    background: transparent ? 'transparent' : 'rgba(255, 255, 255, 0.8)'
  }
}));

const BlurBackground: FC<BlurBackgroundProps> = ({ img, size, transparent, children }) => {
  return (
    <Root img={img} size={size} transparent={transparent}>
      <div className="filter">&nbsp;</div>
      {children}
    </Root>
  );
};

export default BlurBackground;
