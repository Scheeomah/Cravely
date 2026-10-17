"use client";

import { useState } from "react";
import { Clock3, Star, Bike } from "lucide-react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80";

export default function RestaurantCard({ restaurant, onExplore }) {
  const [imageSrc, setImageSrc] = useState(restaurant.image || FALLBACK_IMAGE);

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#E7DDCE] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52 overflow-hidden bg-[#EDE5D8]">
        <img
          src={imageSrc}
          alt={restaurant.name}
          loading="lazy"
          onError={() => {
            if (imageSrc !== FALLBACK_IMAGE) {
              setImageSrc(FALLBACK_IMAGE);
            }
          }}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-[#F8F1E5] px-3 py-1 text-xs font-semibold text-[#526B3B] shadow-sm">
          {restaurant.category}
        </span>

        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-[#30203D] shadow-sm">
          <Star size={14} fill="#F5B942" color="#F5B942" />
          {restaurant.rating}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-[#30203D]">{restaurant.name}</h3>

        <p className="mt-2 min-h-10 text-sm leading-5 text-[#716675]">
          {restaurant.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#655B68]">
          <span className="flex items-center gap-1.5">
            <Clock3 size={15} color="#526B3B" />
            {restaurant.deliveryTime}
          </span>

          <span className="flex items-center gap-1.5">
            <Bike size={16} color="#526B3B" />
            {restaurant.deliveryFee} delivery
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-[#EEE5D8] pt-4">
          <span className="text-xl font-bold text-[#30203D]">
            {restaurant.price}
          </span>

          <button
            type="button"
            onClick={() => onExplore(restaurant)}
            className="rounded-full bg-[#B9F451] px-4 py-2 text-sm font-semibold text-[#30203D] transition hover:bg-[#A6E83A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#526B3B]"
          >
            Explore
          </button>
        </div>
      </div>
    </article>
  );
}
