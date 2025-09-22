export interface IProject {
  id?: number;
  fullName?: string;
  abbreviatedName?: string;
  description?: string;
  linkToProject?: string;
  urlCover?: string;
  publishedAt?: Date;
  workingTime?: string;
  sourceCode?: string;
  technologies?: string[];
  color?: string;
}
