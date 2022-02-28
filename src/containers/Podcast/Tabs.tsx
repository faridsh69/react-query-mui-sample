import { FC, SyntheticEvent, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const PodcastTabs: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs className="custom-tab" value={value} onChange={handleChange}>
      <Tab label="Episodes" />
      <Tab label="Extras" />
      <Tab label="Leaderboards" />
    </Tabs>
  );
};

export default PodcastTabs;
