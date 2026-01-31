import scaffoldLogo from '../assets/projects/scaffold/scaffold_logo.png'
import montroLogo from '../assets/projects/montro/montro_logo.png'
import canDesignThumbnail from '../assets/projects/can_design/can_design_thumbnail.png'
import magazineThumbnail from '../assets/projects/magazine/magazine_thumbnail.png'
import postersThumbnail from '../assets/projects/posters/posters_thumbnail.png'
import interactiveThumbnail from '../assets/projects/interactive/interactive_thumbnail.png'
import scaffoldScreen from '../assets/projects/scaffold/scaffold_screen01.png'

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
    summary: 'All-in-one funding platform for tradespeople that consolidates financial resources with AI support'
    role: 'UI/UX Designer, Product Designer'
    keySkills: 'Figma, Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign, Adobe Premiere Pro, Adobe Lightroom, Adobe XD, Adobe InDesign'
  },
  { 
    id: 2, 
    name: 'Montro', 
    slug: 'montro',
    category: 'ui/ux',
    thumbnail: montroLogo,
    screenImage: montroScreen,
    summary: 'Gamified expense-tracking app that builds spending awareness through goal and reward-based milestones'
  },
  { 
    id: 3, 
    name: 'Beverage label design', 
    slug: 'can-design',
    category: 'graphic design',
    thumbnail: canDesignThumbnail,
    screenImage: canDesignScreen,
    description: 'Fruits-infused sparkiling water label design with two variants'
  },
  { 
    id: 4, 
    name: 'magazine', 
    slug: 'magazine',
    category: 'graphic design',
    thumbnail: magazineThumbnail,
    screenImage: magazineScreen,
    description: 'A historical Christmas market travel magazine'
  },
  { 
    id: 5, 
    name: 'posters', 
    slug: 'posters',
    category: 'graphic design',
    thumbnail: postersThumbnail,
    screenImage: postersScreen,
    description: 'Full cover posters for cats lickable treats'
  },
  { 
    id: 6, 
    name: 'Hello, my first cat!', 
    slug: 'interactive_tutorial',
    category: 'graphic design',
    thumbnail: interactiveThumbnail,
    screenImage: interactiveScreen,
    description: 'Interactive infomative tutorial for a new cat owner'
  },
]

export const projectsBySlug = projects.reduce((acc, project) => {
  acc[project.slug] = project
  return acc
}, {})

