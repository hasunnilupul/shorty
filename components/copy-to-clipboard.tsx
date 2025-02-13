"use client";

import { useRef } from "react";

export default function CopyToClipboard({ url }: { url: string }) {
  const popoverRef = useRef<HTMLDialogElement>(null);
  const handleOnClick = async () => {
    try {
      await navigator.clipboard.writeText(url);

      // Show popover
      if (popoverRef.current) {
        popoverRef.current.showPopover();

        // Hide popover after 2 seconds
        setTimeout(() => {
          popoverRef.current?.hidePopover();
        }, 1000);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <button
        type="button"
        className="block px-1.5 sm:px-3 bg-sky-600 text-white text-base sm:text-lg font-medium rounded-r-md"
        onClick={handleOnClick}
      >
        Copy URL
      </button>

      <dialog
        ref={popoverRef}
        popover="manual"
        className="top-0 py-0.5 px-1.5 sm:py-1.5 sm:px-3 w-fit bg-white text-xs sm:text-base font-medium text-center rounded shadow-md [&::backdrop]:bg-black/10 transition"
      >
        ✅ Copied!
      </dialog>
    </>
  );
}
