import { useQuery } from 'react-query';

import { getPodcastEpisodes } from '@lib/podcast';
import { queryKeys } from '@utils/helpers';
import { Params } from '@interfaces/general';

export const usePodcastEpisodes = (podcastId: string, shouldFetch?: boolean, params?: Params) => {
  const { data = [], isLoading } = useQuery(
    queryKeys.podcast.single(`${podcastId}-episodes`, params),
    getPodcastEpisodes.bind(null, podcastId, params),
    { enabled: shouldFetch }
  );

  return [data, isLoading] as const;
};
