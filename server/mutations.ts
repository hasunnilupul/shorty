import { db } from "@/server/db";
import { urls } from "@/server/db/schema";
import { IncrementClickParams, ShortenUrlParams } from "@/utils/types";
import { eq } from "drizzle-orm";

/** Inserts a new shortened URL record into the database.
 *
 * @param params - The URL parameters
 * @param params.shortCode - The generated short code for the URL
 * @param params.longUrl - The original long URL to be shortened
 * @returns The inserted URL data containing shortCode and longUrl
 */
export const insertShortenedUrl = async ({
  shortCode,
  longUrl,
}: ShortenUrlParams): Promise<{ shortCode: string; longUrl: string }> => {
  await db.insert(urls).values({ shortCode, longUrl }).execute();
  return { shortCode, longUrl };
};

/** Increments the click count for a specific shortened URL.
 *
 * @param params - The parameters for incrementing clicks
 * @param params.id - The id of the URL to update
 * @param params.currentClicks - The current number of clicks before incrementing
 * @returns A Promise that resolves when the update is complete
 */
export const incrementUrlClick = async ({
  id,
  currentClicks,
}: IncrementClickParams): Promise<void> => {
  await db
    .update(urls)
    .set({ clicks: currentClicks + 1 }) // Increment the click count by 1
    .where(eq(urls.id, id))
    .execute();
};
