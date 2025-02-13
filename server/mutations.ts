import { db } from "@/server/db";
import { urls } from "@/server/db/schema";
import { ShortenUrlParams } from "@/utils/types";

/**
 * Inserts a new shortened URL record into the database.
 *
 * @param {Object} params - The URL parameters
 * @param {string} params.shortCode - The generated short code for the URL
 * @param {string} params.longUrl - The original long URL to be shortened
 * @returns {Promise<string>} The shortCode that was inserted
 */
export const insertShortenedUrl = async ({
  shortCode,
  longUrl,
}: ShortenUrlParams): Promise<string> => {
  await db.insert(urls).values({ shortCode, longUrl }).execute();
  return shortCode;
};
