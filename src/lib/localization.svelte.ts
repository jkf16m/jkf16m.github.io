import {I18n} from 'i18n-js';

import esJson from '../locales/es';
import enJson from '../locales/en';
import { derived, writable } from 'svelte/store';
const i18nInstance = new I18n({
    es: esJson,
    en: enJson
});
i18nInstance.defaultLocale = 'es';
const i18nState = writable(i18nInstance);
const currentLang = localStorage.getItem('lang') ?? 'es';
export const language = writable(currentLang);

export const i18n = derived([i18nState, language],([i18nState, language])=>{
    i18nState.locale = language ?? i18nState.defaultLocale;
    localStorage.setItem('lang', language);
    return i18nState;
});





