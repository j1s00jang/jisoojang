import scaffoldLogo from '../assets/projects/scaffold/scaffold_logo.png'
import montroLogo from '../assets/projects/montro/montro_logo.png'
import canDesignThumbnail from '../assets/projects/can_design/can_design_thumbnail.png'
import magazineThumbnail from '../assets/projects/magazine/magazine_thumbnail.png'
import postersThumbnail from '../assets/projects/posters/posters_thumbnail.png'
import interactiveThumbnail from '../assets/projects/interactive/interactive_thumbnail.png'

export const projects = [
  { 
    id: 1, 
    name: 'Scaffold', 
    slug: 'scaffold',
    category: 'ui/ux',
    thumbnail: scaffoldLogo,
    description: 'All-in-one funding platform for tradespeople that consolidates financial resources with AI support'
  },
  { 
    id: 2, 
    name: 'Montro', 
    slug: 'montro',
    category: 'ui/ux',
    thumbnail: montroLogo,
    description: 'Gamified expense-tracking app that builds spending awareness through goal and reward-based milestones'
  },
  { 
    id: 3, 
    name: 'Beverage label design', 
    slug: 'can-design',
    category: 'graphic design',
    thumbnail: canDesignThumbnail,
    description: 'Beverage label design'
  },
  { 
    id: 4, 
    name: 'magazine', 
    slug: 'magazine',
    category: 'graphic design',
    thumbnail: magazineThumbnail,
    description: 'Description for magazine project.'
  },
  { 
    id: 5, 
    name: 'posters', 
    slug: 'posters',
    category: 'graphic design',
    thumbnail: postersThumbnail,
    description: 'Description for posters project.'
  },
  { 
    id: 6, 
    name: 'Hello, my first cat!', 
    slug: 'interactive_tutorial',
    category: 'graphic design',
    thumbnail: interactiveThumbnail,
    description: 'Description for web design project.'
  },
]

export const projectsBySlug = projects.reduce((acc, project) => {
  acc[project.slug] = project
  return acc
}, {})

