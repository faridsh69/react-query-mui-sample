import viralTribeAPI from '@api/viralTribeAPI';

import { Params } from '@interfaces/general';
import { IPodcast } from '@interfaces/podcast';

const INITIAL_PARAMS = {
  select: 'title,image,description,itunes.categories,itunes.season,itunes.episode'
};

export const getPodcasts = async (params: Params = INITIAL_PARAMS): Promise<IPodcast[]> => {
  const { data } = await viralTribeAPI.get('/podcasts', { params });
  return data?.data?.podcasts;
};
