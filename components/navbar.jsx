"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, ShoppingCart } from "lucide-react";
import Logo from "./logo";

export default function Navbar({ cartCount = 0, onCartClick = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/#top" },
    { label: "Restaurants", href: "/#discover" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Contact us", href: "/#contact" },
  ];

  function openCart() {
    setMenuOpen(false);
    onCartClick();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#526B3B]/15 bg-[#F8F1E5]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 md:px-8">
        <Logo />

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-[#30203D]/80 transition-colors hover:text-[#D96C45] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#526B3B]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={openCart}
            className="relative flex items-center gap-2 rounded-full border border-[#526B3B]/25 px-4 py-3 text-sm font-bold text-[#30203D] transition hover:bg-[#B9F451]/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#526B3B]"
          >
            <ShoppingCart size={17} />
            Cart
            {cartCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D96C45] px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          <Link
            href="/#discover"
            className="flex items-center gap-2 rounded-full bg-[#526B3B] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#40552E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#526B3B]"
          >
            <ShoppingBag size={17} />
            Explore food
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart, ${cartCount} items`}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#526B3B]/25 text-[#526B3B] transition hover:bg-[#B9F451]/40"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D96C45] px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#526B3B]/25 text-[#526B3B] transition-colors hover:bg-[#B9F451]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#526B3B]"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#526B3B]/15 bg-[#F8F1E5] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 font-semibold text-[#30203D] transition-colors hover:bg-[#B9F451]/30 hover:text-[#D96C45]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#discover"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#526B3B] px-5 py-3 text-center font-bold text-white transition-colors hover:bg-[#40552E]"
            >
              <ShoppingBag size={17} />
              Explore food
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
