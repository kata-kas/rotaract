import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAboutPageFields {
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    sections?: EntryFieldTypes.Object;
}

export type TypeAboutPageSkeleton = EntrySkeletonType<TypeAboutPageFields, "aboutPage">;
export type TypeAboutPage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAboutPageSkeleton, Modifiers, Locales>;
