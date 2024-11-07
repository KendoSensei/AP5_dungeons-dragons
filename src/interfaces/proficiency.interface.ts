export interface IProficiency {
  index?: string;
  name?: string;
  url?: string;
  level?: number;
}

export interface IProficiencyChoice {
  desc?: string;
  choose?: number;
  type?: string;
  from?: IProficiency[];
}
