import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNavLinksFields {
    title?: EntryFieldTypes.Symbol;
    path?: EntryFieldTypes.Symbol;
}

export type TypeNavLinksSkeleton = EntrySkeletonType<TypeNavLinksFields, "navLinks">;
export type TypeNavLinks<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNavLinksSkeleton, Modifiers, Locales>;
