import PasteUrl from "@/components/paste-url";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start space-y-5 p-3 sm:p-10 bg-gray-50 font-[family-name:var(--font-inter)]">
      <h1 className="text-4xl sm:text-5xl font-bold text-sky-600">Shorty</h1>

      <PasteUrl />
    </main>
  );
}
