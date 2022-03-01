interface PodcastImage {
  url: string;
  link?: string;
  title?: string;
}

export interface Category {
  name: string;
  subs?: { name: string }[];
}

export interface Itunes {
  categories?: Category[];
  season?: number;
  episode?: number;
  duration?: string;
}

export interface IPodcast {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: PodcastImage;
  itunes: Itunes;
}
