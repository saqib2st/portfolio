/**
 * Helper functions for the application
 */

/**
 * Get the base URL for the application
 * @returns The base URL
 */
export function getBaseUrl(): string {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  
  return 'http://localhost:3000';
}
