import { useMutation, useQueryClient } from 'react-query';
import { patchUpdatePodcast } from '@lib/podcast';
import { queryKeys } from '@utils/helpers';

export const useUpdatePodcast = () => {
  const queryClient = useQueryClient();
  return useMutation(patchUpdatePodcast, {
    onSettled: () => {
      queryClient.invalidateQueries(queryKeys.podcast.list());
    }
  });
};
