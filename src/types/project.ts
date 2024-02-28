import { Asset } from 'contentful';

export interface Project {
  title: string;
  date: Date;
  slug: string;
  desc: string;
  thumbnail: Asset<undefined, string> | null;
}
