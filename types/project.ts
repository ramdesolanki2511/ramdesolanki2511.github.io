export interface Project {
  id: number;
  title: string;
  img: string;
  link?: string;
  github?: string;
  description?: string;
  technologies?: string[];
  tags: string[];
}