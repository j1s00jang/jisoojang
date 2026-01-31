import scaffoldLogo from '../assets/projects/scaffold/scaffold_logo.png'
import montroLogo from '../assets/projects/montro/montro_logo.png'
import canDesignThumbnail from '../assets/projects/can_design/can_design_thumbnail.png'

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
    description: 'Description for Montro project.'
  },
  { 
    id: 3, 
    name: 'Can Design', 
    slug: 'can-design',
    category: 'graphic design',
    thumbnail: canDesignThumbnail,
    description: 'Description for Can Design project.'
  },
  { 
    id: 4, 
    name: 'magazine', 
    slug: 'magazine',
    category: 'graphic design',
    thumbnail: scaffoldLogo,
    description: 'Description for magazine project.'
  },
  { 
    id: 5, 
    name: 'posters', 
    slug: 'posters',
    category: 'graphic design',
    thumbnail: scaffoldLogo,
    description: 'Description for posters project.'
  },
  { 
    id: 6, 
    name: 'Web Design', 
    slug: 'web-design',
    category: 'graphic design',
    thumbnail: scaffoldLogo,
    description: 'Description for web design project.'
  },
]

export const projectsBySlug = projects.reduce((acc, project) => {
  acc[project.slug] = project
  return acc
}, {})

