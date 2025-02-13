import { incrementUrlClick } from "@/server/mutations";
import { findUrlByShortCode } from "@/server/queries";
import { NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{
    shortCode?: string;
  }>;
}

/** 
 * Redirects to the original URL based on the short code, or to home if not found.
 * Also increments the click counter for analytics tracking.
 * 
 */
export async function GET(
  _request: Request,
  context: RouteContext
): Promise<NextResponse> {
  const { shortCode } = await context.params;
  if (!shortCode) return NextResponse.redirect("/");

  // Query the database for the URL entry matching the short code
  const urlEntry = await findUrlByShortCode(shortCode);
  // Redirect to home if no matching URL is found
  if (!urlEntry) return NextResponse.redirect("/");

  const longUrl = urlEntry.longUrl;

  // Increment click count for analytics tracking
  // This is done asynchronously but we don't await it since it's not critical for the redirect
  incrementUrlClick({ id: urlEntry.id, currentClicks: urlEntry.clicks });

  // Perform the redirect to the original URL
  return NextResponse.redirect(longUrl);
}
