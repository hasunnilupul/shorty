import { db } from "@/server/db";

/**
 * Retrieves a URL entry from the database by its short code
 *
 * @param {string} shortCode - The unique short code identifier for the URL
 * @returns {Promise<UrlEntry | null>} The URL entry if found, null otherwise
 */
export const findUrlByShortCode = async (shortCode: string) => {
  // Query the database for a URL entry matching the provided short code
  const urlEntry = await db.query.urls.findFirst({
    where: (model, { eq }) => eq(model.shortCode, shortCode),
  });

  return urlEntry;
};
