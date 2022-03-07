import { useMutation } from 'react-query';
import { patchUpdatePodcast } from '@lib/podcast';

export const useUpdatePodcast = () => {
  return useMutation(patchUpdatePodcast);
};
