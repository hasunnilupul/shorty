export default function Footer() {
  return (
    <footer
      className="flex-grow-0 flex-shrink-0 max-w-container mx-auto mt-auto w-full px-2 sm:px-6 lg:px-8"
      aria-labelledby="footer-heading"
    >
      <div className="items-centers grid grid-cols-1 justify-between gap-2 sm:gap-4 border-t border-gray-100 py-3 sm:py-6 md:grid-cols-2">
        <p className="text-sm/6 text-slate-600 max-md:text-center">
          © 2025 Shortly. All rights reserved.
        </p>
        {/* <div className="flex items-center justify-center space-x-4 text-sm/6 font-semibold text-slate-900 md:justify-end">
          <a href="/privacy-policy">Privacy policy</a>
          <div className="h-4 w-px bg-slate-200"></div>
          <a href="/changelog">Changelog</a>
        </div> */}
      </div>
    </footer>
  );
}
