"use client";

import { Utensils, Globe, Cookie, GlassWater } from "lucide-react";

const categories = [
  { name: "All", icon: Utensils },
  { name: "Nigerian Food", icon: Utensils },
  { name: "International Food", icon: Globe },
  { name: "Snacks", icon: Cookie },
  { name: "Drinks", icon: GlassWater },
];

export default function CategoryList({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = selected === category.name;

        return (
          <button
            key={category.name}
            type="button"
            onClick={() => onSelect(category.name)}
            className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
              isSelected
                ? "bg-[#526B3B] text-white"
                : "border border-[#E7DDCE] bg-white text-[#30203D] hover:border-[#526B3B]"
            }`}
          >
            <Icon size={17} />
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
