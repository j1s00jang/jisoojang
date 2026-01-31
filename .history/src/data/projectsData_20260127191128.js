import scaffoldLogo from "../assets/projects/scaffold/scaffold_logo.png";
import montroLogo from "../assets/projects/montro/montro_logo.png";
import canDesignThumbnail from "../assets/projects/can_design/can_design_thumbnail.png";
import magazineThumbnail from "../assets/projects/magazine/magazine_thumbnail.png";
import postersThumbnail from "../assets/projects/posters/posters_thumbnail.png";
import interactiveThumbnail from "../assets/projects/interactive/interactive_thumbnail.png";
import scaffoldScreen from "../assets/projects/scaffold/scaffold_screen01.png";
import scaffoldMockup from "../assets/projects/scaffold/scaffold_mockup01.png";
import scaffoldSurveyResults from "../assets/projects/scaffold/scaffold_surveyResults01.png";
import scaffoldSurveyResults2 from "../assets/projects/scaffold/scaffold_surveyResults02.png";

// Screen images (using thumbnails as fallback for projects without screen images)
const montroScreen = montroLogo;
const canDesignScreen = canDesignThumbnail;
const magazineScreen = magazineThumbnail;
const postersScreen = postersThumbnail;
const interactiveScreen = interactiveThumbnail;

export const projects = [
  {
    id: 1,
    name: "Scaffold",
    slug: "scaffold",
    category: "ux/ui",
    thumbnail: scaffoldLogo,
    screenImage: scaffoldScreen,
    summary:
      "All-in-one funding platform for tradespeople that consolidates financial resources with AI support",
    role: "UX/UI Designer / Graphic Designer",
    keySkills:
      "UX / UI / Layout / Product Design / User Research / Branding / Marketing / Print Design",
    overview: `Skilled tradespeople struggled to keep track of grant deadlines or abandoned their search for grant funding due to the friction of navigating multiple websites.

Scaffold is an all-in-one financial resource app designed to help users manage their financial situations. Ensuring fundamental usability was challenging as disparate features and experiments competed for attention. As the scope expanded, reliability and performance issues increased, requiring careful prioritization and refinement.`,
    mockupImage: scaffoldMockup,
    opportunity: `The project aimed to help users quickly discover grants and financial information from anywhere, including during commutes. A key challenge was reducing friction in the application process while keeping information clear and easy to navigate on a small screen. The solution focused on building a reliable foundation that supports users’ financial circumstances and helps them track deadlines to avoid missing opportunities.

Our high-level goals were to:

1. Surface only eligible resources, no more website-hopping
2. Make information easy to scan and accessible on mobile devices
3. Reduce repetitive typing and user frustration`,
    myRole: `Scaffold's UX/UI foundation was developed to help users review eligible grants at a glance. The main screen uses the application profile to surface key grant highlights, paired with each organization's logo to support quick recognition.

Generous spacing and clear grouping were used to prevent information from feeling crowded or overwhelming, while important details were highlighted to ensure they were not missed.`,
    userResearch: `At the start of the project, the direction was still unclear, and there were no specific goals defined for skilled tradespeople. To gather insights based on real experiences, the team visited a construction site to ask survey questions and reached out through personal connections, including tradespeople introduced through a friend’s sister. Those conversations helped reveal how frustrating it can be to find reliable financial information and grant details across multiple websites.`,
    scaffoldSurveyResults: scaffoldSurveyResults,
    scaffoldSurveyResults2: scaffoldSurveyResults2,
  },
  {
    id: 2,
    name: "Montro",
    slug: "montro",
    category: "ux/ui",
    thumbnail: montroLogo,
    screenImage: montroScreen,
    summary:
      "Gamified expense-tracking app that builds spending awareness through goal and reward-based milestones",
    role: "UX/UI Designer",
    keySkills:
      "Figma, Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign",
    overview:
      "Montro is a gamified expense-tracking application that transforms the mundane task of tracking expenses into an engaging and rewarding experience. The app uses behavioral psychology principles to encourage better spending habits.",
  },
  {
    id: 3,
    name: "Beverage label design",
    slug: "can-design",
    category: "graphic design",
    thumbnail: canDesignThumbnail,
    screenImage: canDesignScreen,
    summary: "Fruits-infused sparkiling water label design with two variants",
    keySkills:
      "Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign",
  },
  {
    id: 4,
    name: "magazine",
    slug: "magazine",
    category: "graphic design",
    thumbnail: magazineThumbnail,
    screenImage: magazineScreen,
    summary: "A historical Christmas market travel magazine",
    keySkills:
      "Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign",
  },
  {
    id: 5,
    name: "Interactive Tutorial",
    slug: "interactive_tutorial",
    category: ["ux/ui", "graphic design"],
    thumbnail: postersThumbnail,
    screenImage: postersScreen,
    summary: "Interactive infomative tutorial for a new cat owner",
    keySkills:
      "Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign",
  },
  {
    id: 6,
    name: "Advertising Posters",
    slug: "posters",
    category: "graphic design",
    thumbnail: interactiveThumbnail,
    screenImage: interactiveScreen,
    summary: "Full cover posters for cats treats",
    keySkills:
      "Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign",
  },
];

export const projectsBySlug = projects.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});
