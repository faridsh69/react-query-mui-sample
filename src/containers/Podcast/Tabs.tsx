import { FC, SyntheticEvent, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useStyles } from './styles/tabs';

const PodcastTabs: FC = () => {
  const { classes } = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs className={classes.tabs} value={value} onChange={handleChange}>
      <Tab className={classes.tab} label="Episodes" />
      <Tab className={classes.tab} label="Extras" />
      <Tab className={classes.tab} label="Leaderboards" />
    </Tabs>
  );
};

export default PodcastTabs;
