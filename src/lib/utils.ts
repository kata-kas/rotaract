import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Asset, createClient, EntryFieldTypes, EntrySkeletonType } from 'contentful';
import AssetLink = EntryFieldTypes.AssetLink;
import { ContentImage } from '@/types/content-image';

const { NEXT_PUBLIC_CONTENTFUL_SPACE_ID, NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY } = process.env

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchContentfulItem<T extends EntrySkeletonType, G>(
  content_type: string, parseFunc: (items: any) => any | null)
  : Promise<G | null> {
  const client = createClient({
    space: NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    accessToken: NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY || "",
  });

  const res = await client.getEntries<T>({
    content_type
  });

  return parseFunc(res.items[0]);
}

export async function fetchContentfulItems<T extends EntrySkeletonType, G>(
  content_type: string, parseFunc: (items: any) => any | null)
  : Promise<G[] | null> {
  const client = createClient({
    space: NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    accessToken: NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY || "",
  });

  const res = await client.getEntries<T>({
    content_type
  });

  return res.items.map(parseFunc);
}

export function parseContentfulContentImage(
  asset?: Asset<undefined, string> | { sys: AssetLink }
): ContentImage | null {
  if (!asset) {
    return null
  }

  if (!('fields' in asset)) {
    return null
  }

  return {
    src: asset.fields.file?.url || '',
    alt: asset.fields.description || '',
    width: asset.fields.file?.details.image?.width || 0,
    height: asset.fields.file?.details.image?.height || 0,
  }
}
