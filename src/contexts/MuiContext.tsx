import { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from 'tss-react';

import { theme } from '@utils/statics';

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
            overflowX: 'hidden'
          },
          body: {
            boxSizing: 'border-box',
            fontSize: '1.5rem',
            fontFamily: 'Montserrat',
            color: 'var(--color-secondary-dark)',
            padding: '0 !important',
            fontWeight: 500,
            lineHeight: 1.6
          },
          a: {
            textDecoration: 'none',
            display: 'block'
          },

          strong: {
            color: 'var(--color-secondary-dark)'
          },
          figure: {
            position: 'relative'
          },

          '.padding': {
            paddingRight: '14rem',
            paddingLeft: '14rem'
          }
        }}
      />

      {children}
    </ThemeProvider>
  );
};

export default MaterialProvider;
