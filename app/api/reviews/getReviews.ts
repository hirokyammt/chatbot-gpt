import { getBaseUrl } from '#/lib/getBaseUrl';
import { notFound } from 'next/navigation';
import type { Review } from './review';

export async function getReviews() {
  const res = await fetch(`${getBaseUrl()}/api/reviews`);

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const reviews = (await res.json()) as Review[];

  if (reviews.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return reviews;
}
