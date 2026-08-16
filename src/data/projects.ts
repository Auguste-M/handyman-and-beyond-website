export interface ProjectPlaceholder {
  id: string;
  category: string;
  image: string;
  alt: string;
}

/**
 * No real project photos were provided. These are tasteful stock placeholders
 * standing in for genuine Handyman & Beyond project photography.
 */
export const projectPlaceholders: ProjectPlaceholder[] = [
  {
    id: 'project-1',
    category: 'Interior Projects',
    image: 'https://images.pexels.com/photos/36511379/pexels-photo-36511379.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Bright modern kitchen with white cabinets, representative of interior improvement work',
  },
  {
    id: 'project-2',
    category: 'Exterior Projects',
    image: 'https://images.pexels.com/photos/12700434/pexels-photo-12700434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Wooden deck with outdoor furniture, representative of exterior improvement work',
  },
  {
    id: 'project-3',
    category: 'Interior Projects',
    image: 'https://images.pexels.com/photos/10827349/pexels-photo-10827349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern bathroom with glass shower, representative of interior improvement work',
  },
  {
    id: 'project-4',
    category: 'Repairs',
    image: 'https://images.pexels.com/photos/5691515/pexels-photo-5691515.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Technician repairing a window, representative of home repair work',
  },
  {
    id: 'project-5',
    category: 'Interior Projects',
    image: 'https://images.pexels.com/photos/7218562/pexels-photo-7218562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Freshly painted interior wall, representative of interior painting work',
  },
  {
    id: 'project-6',
    category: 'Exterior Projects',
    image: 'https://images.pexels.com/photos/7601167/pexels-photo-7601167.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Covered porch with ceiling fan, representative of exterior improvement work',
  },
];
