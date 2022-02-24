import { useQuery } from 'react-query';

import { getPodcasts } from '@lib/podcast';
import { queryKeys } from '@utils/helpers';
import { Params } from '@custom-types/general-types';

export const usePodcasts = (params?: Params) => {
  const { data = [], isLoading } = useQuery(
    queryKeys.podcast.list(params),
    getPodcasts.bind(null, params)
  );

  return [data, isLoading] as const;
};
