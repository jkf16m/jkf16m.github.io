import {I18n} from 'i18n-js';

import esJson from '../locales/es';
import enJson from '../locales/en';
import { derived, writable } from 'svelte/store';

const i18nStore = writable(new I18n({
    es: esJson,
    en: enJson
}));
export const language = writable('en');
export const i18n = derived([i18nStore, language], ([instance, language])=>{
    instance.defaultLocale = 'en';

    instance.locale = language ?? instance.defaultLocale;

    return instance;
})