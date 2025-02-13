"use server";

import { nanoid } from "nanoid";
import { insertShortenedUrl } from "@/server/mutations";
import { redirect } from "next/navigation";

/**
 * Server action that shortens a URL submitted through a form
 * Never returns as it redirects to the shortened URL
 */
export async function shortenUrl(formData: FormData): Promise<never> {
  const link = formData.get("link");
  if (!link) throw new Error("No url found");

  const longUrl = link.toString();
  const shortCode = nanoid(6);

  const urlData = await insertShortenedUrl({ shortCode, longUrl });
  redirect(`/shortener?code=${urlData.shortCode}`);
}
