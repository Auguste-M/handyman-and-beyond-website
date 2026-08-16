export interface ReviewPlaceholder {
  id: string;
  isPlaceholder: true;
}

/**
 * No real customer reviews were provided. These are clearly labeled
 * placeholders reserved for authentic Handyman & Beyond reviews.
 */
export const reviewPlaceholders: ReviewPlaceholder[] = [
  { id: 'review-1', isPlaceholder: true },
  { id: 'review-2', isPlaceholder: true },
  { id: 'review-3', isPlaceholder: true },
];

export const reviewPlatforms = ['Google', 'Yelp', 'Facebook'];
