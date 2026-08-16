export interface ServiceCategory {
  slug: string;
  name: string;
  description: string;
  examples: string[];
}

/**
 * Broad service categories only. Individual examples are common handyman
 * tasks shown for illustration and are NOT a confirmed price list — replace
 * with Handyman & Beyond's actual service list when provided.
 */
export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'home-repairs',
    name: 'Home Repairs',
    description:
      'Everyday fixes that keep your home running smoothly, handled quickly and carefully.',
    examples: ['Drywall & wall repair', 'Door & window repair', 'Fixture replacement'],
  },
  {
    slug: 'home-improvements',
    name: 'Home Improvements',
    description:
      'Upgrades big and small that make your home work better and feel even better.',
    examples: ['Shelving & storage', 'Fixture upgrades', 'Small remodel support'],
  },
  {
    slug: 'interior-projects',
    name: 'Interior Projects',
    description: 'Thoughtful interior work completed with care for your space and belongings.',
    examples: ['Interior painting', 'Trim & molding', 'Assembly & mounting'],
  },
  {
    slug: 'exterior-projects',
    name: 'Exterior Projects',
    description: 'Exterior upkeep and improvements that protect and enhance your home.',
    examples: ['Deck & fence repair', 'Exterior touch-ups', 'Gutter attention'],
  },
  {
    slug: 'maintenance',
    name: 'Maintenance',
    description: 'Ongoing care that keeps small issues from becoming big ones.',
    examples: ['Seasonal upkeep', 'Safety checks', 'General maintenance visits'],
  },
  {
    slug: 'general-handyman',
    name: 'General Handyman & Beyond',
    description: "Something else on your list? If it's home related, we're happy to take a look.",
    examples: ['Custom requests', 'Multi-task visits', 'Ask us about your project'],
  },
];
