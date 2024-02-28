import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNewsFields {
    title?: EntryFieldTypes.Symbol;
    date?: EntryFieldTypes.Date;
    slug?: EntryFieldTypes.Symbol;
    thumbnail?: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.RichText;
    desc?: EntryFieldTypes.Symbol;
}

export type TypeNewsSkeleton = EntrySkeletonType<TypeNewsFields, "news">;
export type TypeNews<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNewsSkeleton, Modifiers, Locales>;
