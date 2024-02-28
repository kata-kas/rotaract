import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProjectsPageFields {
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
}

export type TypeProjectsPageSkeleton = EntrySkeletonType<TypeProjectsPageFields, "projectsPage">;
export type TypeProjectsPage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProjectsPageSkeleton, Modifiers, Locales>;
