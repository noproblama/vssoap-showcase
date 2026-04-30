/**
 * Returns the correct absolute URL for a file that lives in public/.
 * Works in both Vite dev mode and GitHub Pages production because
 * import.meta.env.BASE_URL is always the configured base ("/vssoap-showcase/").
 *
 * Usage: asset("soap-rose-1.jpg") → "/vssoap-showcase/soap-rose-1.jpg"
 */
export const asset = (filename: string): string =>
  `${import.meta.env.BASE_URL}${filename}`;
