import { FC, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import TabPanel from '@components/TabPanel';
import BasicInfo from './BasicInfo';
import Metadata from './Metadata';

const StyledTab = styled(Tab)({
  fontSize: '2.5rem',
  fontWeight: 500,
  paddingRight: 0,
  paddingLeft: 0,

  '&:not(:last-child)': {
    marginRight: '3rem'
  }
});

const PodcastForm: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack pt="4rem" pb="4rem" className="padding" direction="column">
      <Tabs value={value} onChange={handleChange}>
        <StyledTab label="Basic info" />
        <StyledTab label="Metadata" />
        {/* <StyledTab label="Chapters" />
        <StyledTab label="Soundbite" />
        <StyledTab label="Transcript" /> */}
      </Tabs>
      <Divider sx={{ marginBottom: '3rem' }} />

      <TabPanel value={value} index={0}>
        <BasicInfo />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Metadata />
      </TabPanel>

      <Divider sx={{ marginTop: '4rem' }} />

      <Stack direction="row-reverse" pt="2rem" spacing={3}>
        <Button variant="contained" color="primary" size="large">
          Save
        </Button>
        <Button color="secondary" size="large">
          Cancel
        </Button>
      </Stack>
    </Stack>
  );
};

export default PodcastForm;
