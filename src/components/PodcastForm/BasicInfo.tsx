import { FC } from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Select from '@components/Select';
import { IPodcast } from '@interfaces/podcast';
import { UseFormRegister } from 'react-hook-form';

interface PodcastBasicInfoProps {
  podcast?: IPodcast;
  register: UseFormRegister<any>;
  errors: any;
}

const PodcastBasicInfo: FC<PodcastBasicInfoProps> = ({ podcast, register, errors }) => {
  return (
    <Stack direction="row" spacing={3}>
      <Stack direction="column" spacing={2}>
        <figure>
          <Image src="/images/poster.png" alt="" width={352} height={352} />
        </figure>

        <Stack direction="row">
          <Button size="large" variant="contained" color="primary">
            Add Image
          </Button>
        </Stack>
      </Stack>

      <Stack direction="column" spacing={2} flex="1">
        <TextField
          label="Title"
          error={!!errors.title}
          helperText={errors.title?.message}
          {...register('title')}
        />
        <FormControl fullWidth variant="standard">
          <label htmlFor="sub-input">Sub Title</label>
          <TextField className="sm-pd" id="sub-input" />
        </FormControl>

        <FormControl fullWidth variant="standard">
          <label htmlFor="source-input">Source</label>
          <TextField className="sm-pd" id="source-input" />
        </FormControl>

        <FormControl fullWidth variant="standard">
          <label htmlFor="lang-input">Language</label>
          <TextField className="sm-pd" id="lang-input" />
        </FormControl>

        <FormControl fullWidth variant="standard">
          <label>Category</label>
          <Select options={[]} />
        </FormControl>

        <FormControl fullWidth variant="standard">
          <label htmlFor="tags-input">Additional Tags</label>
          <TextField
            placeholder="Add tags to describe the mood and style"
            className="sm-pd"
            id="tags-input"
          />
        </FormControl>

        <FormControl fullWidth variant="standard">
          <label htmlFor="desc-input">Description</label>
          <TextField
            name="description"
            defaultValue={podcast?.description}
            multiline
            id="desc-input"
            minRows={7}
            maxRows={7}
          />
        </FormControl>

        <FormControl fullWidth variant="standard">
          <label htmlFor="owner-em-input">Owners email</label>
          <TextField type="email" className="sm-pd" id="owner-em-input" />
        </FormControl>

        <Stack direction="row">
          <Button size="large" variant="contained" color="primary">
            Add Person
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PodcastBasicInfo;
