import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNewsPageFields {
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
}

export type TypeNewsPageSkeleton = EntrySkeletonType<TypeNewsPageFields, "newsPage">;
export type TypeNewsPage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNewsPageSkeleton, Modifiers, Locales>;
