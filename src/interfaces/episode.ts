import { Itunes } from './podcast';

export interface IEpisode {
  _id: string;
  title: string;
  itunes: Itunes;
}
