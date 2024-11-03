import { useState, useEffect, useMemo } from 'react';
import TranslationKeys from '@utilities/locales/fr.json';

interface Translation {
    [key: string]: string;
}

export const useTranslation = () => {

    const locale = useMemo(() => {
        const browserLang = navigator.language || navigator.languages[0];
        return browserLang.startsWith('fr') ? 'fr' : 'en';
    }, []);

    const [translations, setTranslations] = useState<Translation>({});

    useEffect(() => {
        async function loadTranslations() {
            try {
                const response = await import(`../locales/${locale}.json`);
                setTranslations(response.default);
            } catch (error) {
                console.error(`Could not load translations for locale: ${locale}`, error);
            }
        }

        loadTranslations();
    }, [locale]);

    const translate = (key: keyof typeof TranslationKeys) => translations[key] || key;

    return { translate };
};
