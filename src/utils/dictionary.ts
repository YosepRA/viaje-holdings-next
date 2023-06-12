import 'server-only';

import { Dictionary } from 'types/dictionary';

interface DictionaryImportType {
  en: () => Promise<Dictionary>;
  id: () => Promise<Dictionary>;
}

const dictionaries = {
  en: () =>
    import('data/dictionaries/en.json').then((module) => module.default),
  id: () =>
    import('data/dictionaries/id.json').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> =>
  dictionaries[locale as keyof DictionaryImportType]();
