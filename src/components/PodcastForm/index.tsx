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
import { IPodcast } from '@interfaces/podcast';
import { UseMutationResult } from 'react-query';

const StyledTab = styled(Tab)({
  fontSize: '2.5rem',
  fontWeight: 500,
  paddingRight: 0,
  paddingLeft: 0,

  '&:not(:last-child)': {
    marginRight: '3rem'
  }
});

interface PodcastFormProps {
  podcast?: IPodcast;
  onCancel: VoidFunction;
  updatePodcastMutation: UseMutationResult<IPodcast, unknown, IPodcast, unknown>;
  openSnackbar: any;
}

const PodcastForm: FC<PodcastFormProps> = ({
  podcast,
  onCancel,
  updatePodcastMutation,
  openSnackbar
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = event.currentTarget.titleInput.value;
    const description = event.currentTarget.description.value;
    updatePodcastMutation.mutate({ ...podcast, title, description } as IPodcast, {
      onError: (error: any) => {
        openSnackbar({
          message: error.message,
          status: 'error'
        });
      },
      onSuccess: () => {
        onCancel();
        openSnackbar({
          message: 'Podcast updated successfully',
          status: 'success'
        });
      }
    });
  };

  return (
    <Stack pt="4rem" pb="4rem" className="padding" direction="column" zIndex="1">
      <form onSubmit={handleSubmit}>
        <Tabs value={value} onChange={handleChange}>
          <StyledTab label="Basic info" />
          <StyledTab label="Metadata" />
          {/* <StyledTab label="Chapters" />
        <StyledTab label="Soundbite" />
        <StyledTab label="Transcript" /> */}
        </Tabs>
        <Divider sx={{ marginBottom: '3rem' }} />

        <TabPanel value={value} index={0}>
          <BasicInfo podcast={podcast} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Metadata />
        </TabPanel>

        <Divider sx={{ marginTop: '4rem' }} />

        <Stack direction="row-reverse" pt="2rem" spacing={3}>
          {updatePodcastMutation.status === 'loading' ? (
            '...loading'
          ) : (
            <Button variant="contained" color="primary" size="large" type="submit">
              Save
            </Button>
          )}
          <Button color="secondary" size="large" onClick={onCancel}>
            Cancel
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default PodcastForm;
