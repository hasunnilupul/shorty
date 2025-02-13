import Link from "next/link";

export default function CopyUrl() {
  return (
    <section className="flex flex-col items-start justify-center w-full md:max-w-screen-sm">
      <div className="flex-col items-start">
        <h3 className="text-xl sm:text-3xl font-bold text-gray-600">
          Your shortened URL
        </h3>
        <p className="mt-2 text-xs sm:text-sm font-medium text-gray-900 sm:max-w-lg">
          Copy the short link and share it in messages, texts, posts, websites
          and other locations.
        </p>
      </div>

      <div className="mt-5 w-full py-2 px-3 sm:py-4 sm:px-8 bg-white rounded-md shadow">
        <label htmlFor="link" className="sr-only">
          Link
        </label>
        <div className="flex items-center rounded-md bg-white h-10 sm:h-14 outline outline-1 -outline-offset-1 outline-gray-300">
          <input
            id="link"
            name="link"
            type="url"
            className="flex-grow block h-full min-w-0 rounded-l-md py-1.5 pl-1.5 sm:pl-3 text-sm/6 sm:text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-800"
          />
          <div className="shrink-0 flex h-full focus-within:relative">
            <button
              type="button"
              className="block px-1.5 sm:px-3 bg-sky-600 text-white text-base sm:text-lg font-medium rounded-r-md"
            >
              Copy URL
            </button>
          </div>
        </div>
      </div>

      <p className="mt-3 text-xs sm:text-sm font-medium text-gray-900 sm:max-w-lg">
        <span className="mr-1">Long URL:</span>
        <a
          href="long-url"
          target="_blank"
          className="text-sky-500 hover:underline"
        >
          long-url
        </a>
      </p>

      <Link
        href="/"
        className="mt-4 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        Shorten another URL
      </Link>
    </section>
  );
}
