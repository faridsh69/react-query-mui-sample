import { useMutation, useQueryClient } from 'react-query';
import { postCreatePodcast } from '@lib/podcast';
import { queryKeys } from '@utils/helpers';

export const useCreatePodcast = () => {
  const queryClient = useQueryClient();
  return useMutation(postCreatePodcast, {
    onSettled: () => {
      queryClient.invalidateQueries(queryKeys.podcast.list());
    }
  });
};
