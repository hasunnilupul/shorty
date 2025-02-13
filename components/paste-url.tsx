import { shortenUrl } from "@/server/actions";

export default function PasteUrl() {
  return (
    <section className="flex flex-col items-center justify-start w-full sm:max-w-screen-sm md:max-w-screen-md py-2 px-3 sm:py-4 sm:px-8 bg-white rounded-md shadow">
      <h3 className="text-xl sm:text-3xl font-bold text-gray-600">
        Paste the URL to be shortened
      </h3>

      <form action={shortenUrl} className="w-full">
        <div className="mt-5">
          <label htmlFor="link" className="sr-only">
            Link
          </label>
          <div className="flex items-center rounded-md bg-white h-10 sm:h-14 outline outline-1 -outline-offset-1 outline-gray-300">
            <input
              id="link"
              name="link"
              type="url"
              placeholder="Enter the link here"
              className="flex-grow block h-full min-w-0 rounded-l-md py-1.5 pl-1.5 sm:pl-3 text-sm/6 sm:text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-800"
            />
            <div className="shrink-0 flex h-full focus-within:relative">
              <button
                type="submit"
                className="block px-1.5 sm:px-3 bg-sky-600 text-white text-base sm:text-lg font-medium rounded-r-md"
              >
                Shorten URL
              </button>
            </div>
          </div>
        </div>
      </form>

      <p className="mt-2 text-xs sm:text-sm font-medium text-gray-900 sm:max-w-lg text-center">
        Shorty is a free tool to shorten URLs and generate short links URL
        shortener allows to create a shortened link making it easy to share
      </p>
    </section>
  );
}
