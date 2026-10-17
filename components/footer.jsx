import Link from "next/link";
import Logo from "./logo";

const socialLinks = [
  { name: "Instagram", symbol: "IG", href: "https://www.instagram.com/" },
  { name: "Facebook", symbol: "f", href: "https://www.facebook.com/" },
  { name: "X", symbol: "X", href: "https://x.com/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#30203D] px-5 py-12 text-[#F8F1E5] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-3">
          <div>
            <Logo />

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
              Good food. Good mood. Discover delicious meals, local favourites
              and refreshing drinks with Cravely.
            </p>

            <div className="mt-5 flex flex-col items-start gap-3 text-sm">
              <a
                href="mailto:chyjanique@gmail.com"
                className="transition hover:text-[#B9F451]"
              >
                chyjanique@gmail.com
              </a>

              <a
                href="https://wa.me/2348138382520"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#B9F451]"
              >
                WhatsApp: 08138382520
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-[#B9F451]">
              Explore
            </h3>

            <div className="flex flex-col items-start gap-4 text-sm text-white/80">
              <Link href="/#top" className="transition hover:text-[#B9F451]">
                Home
              </Link>

              <Link
                href="/#discover"
                className="transition hover:text-[#B9F451]"
              >
                Discover food
              </Link>

              <Link
                href="/#categories"
                className="transition hover:text-[#B9F451]"
              >
                Browse categories
              </Link>

              <Link
                href="/#how-it-works"
                className="transition hover:text-[#B9F451]"
              >
                How it works
              </Link>

              <Link
                href="/#contact"
                className="transition hover:text-[#B9F451]"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#B9F451]">
              Follow Cravely
            </h3>

            <p className="mb-5 text-sm leading-6 text-white/70">
              Stay connected and discover your next favourite meal.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.name}`}
                  title={social.name}
                  className="flex h-11 min-w-11 items-center justify-center rounded-full border border-white/20 px-3 text-sm font-bold transition hover:border-[#B9F451] hover:bg-[#B9F451] hover:text-[#30203D]"
                >
                  {social.symbol}
                </a>
              ))}
            </div>

            <p className="mt-4 text-xs leading-5 text-white/50">
              Social links currently point to the platforms. Replace them with
              Cravely's actual profile URLs when available.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cravely. All rights reserved.</p>
          <p>Made for your cravings.</p>
        </div>
      </div>
    </footer>
  );
}
