"use client";

import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex w-full items-center gap-3 rounded-full border border-[#526B3B]/20 bg-white px-4 py-2 shadow-sm transition focus-within:border-[#526B3B] focus-within:ring-2 focus-within:ring-[#B9F451]/60">
      <Search size={21} className="shrink-0 text-[#526B3B]" />

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search restaurants or food..."
        aria-label="Search restaurants or food"
        className="min-w-0 flex-1 bg-transparent py-2 text-sm text-[#30203D] outline-none placeholder:text-[#30203D]/55 sm:text-base"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          title="Clear search"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#526B3B] transition-colors hover:bg-[#B9F451]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#526B3B]"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}
