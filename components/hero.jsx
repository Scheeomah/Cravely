import Link from "next/link";
import { ArrowDownRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#F8F1E5]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-24">
        {/* Hero text */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#B9F451]/50 px-4 py-2 text-sm font-bold text-[#30203D]">
            <Sparkles size={16} />
            Good food. Good mood.
          </div>

          <h1 className="max-w-xl text-5xl leading-[1.08] font-extrabold tracking-tight text-[#526B3B] sm:text-6xl lg:text-7xl">
            Your next
            <br />
            favourite meal
            <br />
            <span className="text-[#D96C45]">is waiting.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#30203D]/75 md:text-lg">
            From local favourites to comfort-food classics, discover meals worth
            looking forward to. Your cravings have a home.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#discover"
              className="inline-flex items-center gap-2 rounded-full bg-[#526B3B] px-6 py-4 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#40552E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#526B3B]"
            >
              Find your food
              <ArrowDownRight size={19} />
            </Link>

            <span className="text-sm font-medium text-[#30203D]/70">
              Made for your cravings.
            </span>
          </div>

          {/* Highlights */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#526B3B]/20 pt-6">
            <div>
              <p className="text-xl font-extrabold text-[#526B3B]">Fresh</p>
              <p className="mt-1 text-sm text-[#30203D]/70">Food you'll love</p>
            </div>

            <div>
              <p className="text-xl font-extrabold text-[#526B3B]">Local</p>
              <p className="mt-1 text-sm text-[#30203D]/70">
                Flavours you know
              </p>
            </div>

            <div>
              <p className="text-xl font-extrabold text-[#526B3B]">Easy</p>
              <p className="mt-1 text-sm text-[#30203D]/70">
                Simple food discovery
              </p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-3 -top-4 h-28 w-28 rounded-full bg-[#B9F451] sm:-right-5 sm:-top-6 sm:h-36 sm:w-36" />

          <div className="absolute -bottom-5 -left-4 h-24 w-24 rounded-full bg-[#D96C45] sm:-bottom-7 sm:-left-6 sm:h-32 sm:w-32" />

          <div className="relative overflow-hidden rounded-4xl bg-[#526B3B] p-2 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85"
              alt="A colourful spread of freshly prepared food"
              className="h-90 w-full rounded-[1.6rem] object-cover sm:h-117"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[#F8F1E5] p-4 sm:bottom-8 sm:left-8 sm:right-8">
              <p className="text-xs font-bold tracking-widest text-[#D96C45] uppercase">
                A little food inspiration
              </p>

              <p className="mt-1 text-lg font-extrabold text-[#30203D] sm:text-xl">
                Something delicious is calling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
