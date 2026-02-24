// Import individual project data files
import { scaffold } from "./projects/scaffold";
import { montro } from "./projects/montro";
import { canDesign } from "./projects/canDesign";
import { magazine } from "./projects/magazine";
import { interactiveTutorial } from "./projects/interactiveTutorial";
import { posters } from "./projects/posters";

export const projects = [
    scaffold,
    montro,
    canDesign,
    magazine,
    interactiveTutorial,
    posters,
];

export const projectsBySlug = projects.reduce((acc, project) => {
    acc[project.slug] = project;
    return acc;
}, {});
