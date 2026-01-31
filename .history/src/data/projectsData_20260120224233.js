import scaffoldLogo from '../assets/projects/scaffold/scaffold_logo.png'
import montroLogo from '../assets/projects/montro/montro_logo.png'
import canDesignThumbnail from '../assets/projects/can_design/can_design_thumbnail.png'
import magazineThumbnail from '../assets/projects/magazine/magazine_thumbnail.png'
import postersThumbnail from '../assets/projects/posters/posters_thumbnail.png'
import interactiveThumbnail from '../assets/projects/interactive/interactive_thumbnail.png'
import scaffoldScreen from '../assets/projects/scaffold/scaffold_screen01.png'
import scaffoldMockup from '../assets/projects/scaffold/scaffold_mockup.png'

// Screen images (using thumbnails as fallback for projects without screen images)
const montroScreen = montroLogo
const canDesignScreen = canDesignThumbnail
const magazineScreen = magazineThumbnail
const postersScreen = postersThumbnail
const interactiveScreen = interactiveThumbnail

export const projects = [
  { 
    id: 1, 
    name: 'Scaffold', 
    slug: 'scaffold',
    category: 'ui/ux',
    thumbnail: scaffoldLogo,
    screenImage: scaffoldScreen,
    summary: 'All-in-one funding platform for tradespeople that consolidates financial resources with AI support',
    role: 'UI/UX Designer / Graphic Designer',
    keySkills: 'UI / UX / Layout / Product Design / User Research / Branding / Marketing / Print Design',
    overview: `More than 85% of skilled tradespeople struggled missing grant deadlines or abandoning their search for financial information due to the friction of navigating multiple websites. Scaffold is an all-in-one financial resource app designed to support users in managing their financial situations.

Ensuring fundamental usability was challenging as disparate features and experiments competed for attention. As scope expanded, reliability and performance issues also grew, requiring careful prioritization and refinement.

Scaffold was released at BCIT in December 2025.`
    mockupImage: scaffoldMockup,
  },
  { 
    id: 2, 
    name: 'Montro', 
    slug: 'montro',
    category: 'ui/ux',
    thumbnail: montroLogo,
    screenImage: montroScreen,
    summary: 'Gamified expense-tracking app that builds spending awareness through goal and reward-based milestones',
    role: 'UI/UX Designer',
    keySkills: 'Figma, Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign',
    overview: 'Montro is a gamified expense-tracking application that transforms the mundane task of tracking expenses into an engaging and rewarding experience. The app uses behavioral psychology principles to encourage better spending habits.'
  },
  { 
    id: 3, 
    name: 'Beverage label design', 
    slug: 'can-design',
    category: 'graphic design',
    thumbnail: canDesignThumbnail,
    screenImage: canDesignScreen,
    summary: 'Fruits-infused sparkiling water label design with two variants',
    keySkills: 'Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign'
  },
  { 
    id: 4, 
    name: 'magazine', 
    slug: 'magazine',
    category: 'graphic design',
    thumbnail: magazineThumbnail,
    screenImage: magazineScreen,
    summary: 'A historical Christmas market travel magazine',
    keySkills: 'Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign'
  },
  { 
    id: 5, 
    name: 'posters', 
    slug: 'posters',
    category: 'graphic design',
    thumbnail: postersThumbnail,
    screenImage: postersScreen,
    summary: 'Full cover posters for cats lickable treats',
    keySkills: 'Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign'
  },
  { 
    id: 6, 
    name: 'Hello, my first cat!', 
    slug: 'interactive_tutorial',
    category: 'graphic design',
    thumbnail: interactiveThumbnail,
    screenImage: interactiveScreen,
    summary: 'Interactive infomative tutorial for a new cat owner',
    keySkills: 'Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign'
  }
]

export const projectsBySlug = projects.reduce((acc, project) => {
  acc[project.slug] = project
  return acc
}, {})

