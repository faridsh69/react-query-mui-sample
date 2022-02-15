import { FC } from 'react';

import Header from './Header';
import Footer from './Footer';
import { useStyles } from './styles/main';

const MainLayout: FC = ({ children }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
