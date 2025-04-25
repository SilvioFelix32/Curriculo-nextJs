import {
  TranslationDictionary,
  TranslationMultiLanguageDictionary,
} from "./dictionary";

export type Language = "pt-br" | "en-us";

export class Translator {
  private readonly multiLanguageDictionary: TranslationMultiLanguageDictionary;
  private language: Language;

  public constructor(
    multiLanguageDictionary: TranslationMultiLanguageDictionary,
    defaultLanguage: Language = "pt-br"
  ) {
    this.multiLanguageDictionary = Object.assign({}, multiLanguageDictionary);
    this.language = defaultLanguage;
  }

  public setLanguage(language: Language): void {
    this.language = language;
  }

  public get(key: string, defaultValue: string | null = null): any {
    const value = this.getByLanguage(this.language, key);
    if (value !== undefined && value !== null) {
      return value;
    }
    return defaultValue === null ? key : defaultValue;
  }

  public getByLanguage(
    language: Language,
    key: string,
    defaultValue: any = null
  ): any {
    const dictionary = this.multiLanguageDictionary[language];
    if (dictionary === undefined || dictionary === null) {
      return defaultValue;
    }

    const keys = key.split(".");
    let value: any = dictionary;

    for (const k of keys) {
      if (value === undefined || value === null) {
        return defaultValue;
      }
      value = value[k];
    }

    return value || defaultValue;
  }
}
