// Import individual project data files
import { scaffold } from "./projects/scaffold";
import { montro } from "./projects/montro";
import { canDesign } from "./projects/canDesign";
import { magazine } from "./projects/magazine";
import { interactiveTutorial } from "./projects/interactiveTutorial";
import { posters } from "./projects/posters";

// Combine all projects into a single array
export const projects = [
  scaffold,
  montro,
  canDesign,
  posters,

  magazine,
  interactiveTutorial,
];

export const projectsBySlug = projects.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});
