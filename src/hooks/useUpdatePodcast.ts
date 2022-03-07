import { useMutation } from 'react-query';

import { patchUpdatePodcast } from '@lib/podcast';

export const useUpdatePodcast = () => {
  const { mutate, status, error } = useMutation(patchUpdatePodcast);

  return [mutate, status, error];
};
