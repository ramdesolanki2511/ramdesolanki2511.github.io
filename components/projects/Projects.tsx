import React from "react";
import projects from "@/data/content/projects";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";

type ProjectsProps = {
  overwriteProjects?: Project[];
};

function Projects({ overwriteProjects }: ProjectsProps) {
  const projectsList = overwriteProjects ? overwriteProjects : projects;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projectsList.map((item: Project) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
}

export default Projects;
