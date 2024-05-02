"use client";

import {useLocale} from 'next-intl';

export const LocaleSwitcher = () => {
    const locale = useLocale();

    return (
        <div className="flex items-center justify-center gap-2">
            <button
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                EN
            </button>
            <button
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                RO
            </button>
        </div>
    )
}
