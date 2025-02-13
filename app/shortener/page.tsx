import CopyUrl from "@/components/copy-url";
import { findUrlByShortCode } from "@/server/queries";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: Promise<{
    code?: string;
  }>;
}

export default async function ShortenerPage({ searchParams }: PageProps) {
  const { code } = await searchParams;
  if(!code) redirect("/");

  // Query the database for the URL entry matching the short code
  const urlEntry = await findUrlByShortCode(code);
  // Redirect to home if no matching URL is found
  if (!urlEntry) redirect("/");

  return (
    <main className="flex flex-col items-center justify-start space-y-5 p-3 sm:p-10 bg-gray-50 font-[family-name:var(--font-inter)]">
      <h1 className="text-4xl sm:text-5xl font-bold text-sky-600">Shorty</h1>

      <CopyUrl data={urlEntry}/>
    </main>
  );
}
