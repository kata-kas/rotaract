import type { Asset, ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful';

export interface TypeProjectsFields {
    title?: EntryFieldTypes.Symbol;
    date?: EntryFieldTypes.Date;
    slug?: EntryFieldTypes.Symbol;
    thumbnail?: Asset<undefined, string> | null;
    description?: EntryFieldTypes.RichText;
    desc?: EntryFieldTypes.Symbol;
}

export type TypeProjectsSkeleton = EntrySkeletonType<TypeProjectsFields, "projects">;
export type TypeProjects<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProjectsSkeleton, Modifiers, Locales>;
