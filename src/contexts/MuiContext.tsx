import { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from 'tss-react';

import { theme } from '@utils/statics';
import { Color } from '@interfaces/general';

const MaterialProvider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--color-primary-main': '#00B8CE',
            '--color-primary-light': '#17D4E9',
            '--color-primary-lighter': '#B3E8EF',
            '--color-primary-dark': '#12B8CE',
            '--color-primary-darker': '#008A9A',

            '--color-secondary-main': '#574D44',
            '--color-secondary-dark': '#261E1F',

            '--color-light': '#261E1F00',
            '--color-grey': '#261E1F4D',
            '--color-grey-dark': '#B4B4B4',
            '--color-grey-light': '#F9EEE7',

            '--color-white': '#fff',
            '--color-black': '#000'
          },
          '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'inherit'
          },
          html: {
            fontSize: '62.5%',
            overflowY: 'auto',
            overflowX: 'hidden',

            [theme.breakpoints.up('bigDesktop')]: {
              fontSize: '75%'
            },

            [theme.breakpoints.down('desktop')]: {
              fontSize: '56.25%'
            }
          },
          body: {
            boxSizing: 'border-box',
            fontSize: '1.5rem',
            fontFamily: 'Montserrat',
            color: Color.SEC_DARK,
            padding: '0 !important',
            fontWeight: 500,
            lineHeight: 1.6
          },
          a: {
            textDecoration: 'none',
            display: 'block'
          },

          strong: {
            '&.dark': {
              color: Color.SEC_DARK
            }
          },
          figure: {
            position: 'relative'
          },

          '.padding': {
            paddingRight: '14rem',
            paddingLeft: '14rem',

            [theme.breakpoints.up('bigDesktop')]: {
              paddingRight: '20rem',
              paddingLeft: '20rem'
            }
          },

          '.padding-left': {
            paddingLeft: '14rem',

            [theme.breakpoints.up('bigDesktop')]: {
              paddingLeft: '20rem'
            }
          },

          '.card.MuiCard-root': {
            minWidth: '26rem',
            width: '26rem',
            boxShadow: 'none',

            '& figure': {
              height: '26rem',
              minWidth: '100%',
              maxWidth: '100%',

              [theme.breakpoints.up('bigDesktop')]: {
                height: '28rem'
              },

              '@media (max-width: 1350px)': {
                height: '25rem'
              }
            },

            [theme.breakpoints.up('bigDesktop')]: {
              minWidth: '28rem',
              width: '28rem'
            },

            '@media (max-width: 1350px)': {
              minWidth: '25rem',
              width: '25rem'
            }
          },

          'h1,h2,h3,h4,h5,h6,p,span': {
            '&.white': {
              color: Color.WHITE
            }
          },

          'button.slider-arrow': {
            position: 'absolute',
            width: '15rem',
            borderRadius: 0,
            top: 0,
            bottom: 0,

            '&:hover': {
              backgroundColor: 'transparent'
            },

            '&.right': {
              right: 0,
              paddingRight: '2rem',
              justifyContent: 'flex-end',
              background:
                'transparent linear-gradient(270deg, #FFFFFF 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box'
            },
            '&.left': {
              left: 0,
              paddingLeft: '2rem',
              justifyContent: 'flex-start',
              background:
                'transparent linear-gradient(270deg, #FFFFFF00 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box',

              '& > svg': {
                transform: 'rotate(-180deg)'
              }
            }
          }
        }}
      />

      {children}
    </ThemeProvider>
  );
};

export default MaterialProvider;
