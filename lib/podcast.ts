import viralTribeAPI from '@api/viralTribeAPI';

import { Params } from '@custom-types/general-types';
import { IPodcast } from '@custom-types/podcast';

const INITIAL_PARAMS = {
  select: 'title,image,description,itunes.categories'
};

export const getPodcasts = async (params: Params = INITIAL_PARAMS): Promise<IPodcast[]> => {
  const { data } = await viralTribeAPI.get('/podcasts', { params });
  return data?.data?.podcasts;
};
