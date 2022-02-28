import viralTribeAPI from '@api/viralTribeAPI';

import { Params } from '@interfaces/general';
import { IPodcast } from '@interfaces/podcast';

const INITIAL_PARAMS = {
  select: 'title,slug,image,description,itunes.categories,itunes.season,itunes.episode'
};

export const getPodcasts = async (params: Params = INITIAL_PARAMS): Promise<IPodcast[]> => {
  const { data } = await viralTribeAPI.get('/podcasts', { params });
  return data?.data?.podcasts;
};

export const getPodcastBySlug = async (slug: string): Promise<IPodcast | undefined> => {
  try {
    const { data } = await viralTribeAPI.get(`/podcasts/slug/${slug}`);
    return data?.data?.podcast;
  } catch (err) {}
};
