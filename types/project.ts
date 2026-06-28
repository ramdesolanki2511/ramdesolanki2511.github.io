export interface Project {
  id: number;
  title: string;
  img: string;
  link?: string;
  github?: string;
  desc?: string;
  technologies?: string[];
  tags: string[];
}