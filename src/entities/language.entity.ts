import { ILanguage } from "../interfaces/language.interface";

export class Language {
  index?: string;
  name?: string;
  url?: string;
  level?: number;

  constructor(data: ILanguage) {
    if (data.index) this.index = data.index;
    if (data.name) this.name = data.name;
    if (data.url) this.url = data.url;
    if (data.level) this.level = data.level;
  }
}
