import { urls } from "@/server/db/schema";
import type { InferSelectModel } from "drizzle-orm";

export type ShortenUrlParams = {
  shortCode: string;
  longUrl: string;
};

export type IncrementClickParams = {
  id: number;
  currentClicks: number;
}

export type UrlData = InferSelectModel<typeof urls>;