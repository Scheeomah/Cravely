"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SearchBar from "@/components/searchbar";
import CategoryList from "@/components/categorylist";
import RestaurantCard from "@/components/restaurantcard";
import Footer from "@/components/footer";
import {
  X,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Clock3,
  Bike,
  Star,
  MessageCircle,
  Mail,
  ArrowRight,
} from "lucide-react";

type Food = {
  id: number;
  name: string;
  category: string;
  rating: number;
  deliveryTime: string;
  price: string;
  deliveryFee: string;
  description: string;
  image: string;
};

type CartItem = {
  food: Food;
  quantity: number;
};

const WHATSAPP_NUMBER = "2348138382520";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqpewrlr";

const foods: Food[] = [
  {
    id: 1,
    name: "Abacha",
    category: "Nigerian Food",
    rating: 4.8,
    deliveryTime: "20–30 min",
    price: "₦2,500",
    deliveryFee: "₦400",
    description: "Traditional African salad made with cassava.",
    image: "/images/abacha.jpg",
  },
  {
    id: 2,
    name: "Afang Soup & Pounded Yam",
    category: "Nigerian Food",
    rating: 4.9,
    deliveryTime: "35–45 min",
    price: "₦3,500",
    deliveryFee: "₦500",
    description: "Traditional Afang soup served with pounded yam.",
    image: "/images/afang.jpg",
  },
  {
    id: 3,
    name: "Jollof Rice",
    category: "Nigerian Food",
    rating: 4.9,
    deliveryTime: "25–35 min",
    price: "₦3,500",
    deliveryFee: "₦500",
    description:
      "Flavourful Nigerian jollof rice cooked in a rich tomato sauce.",
    image: "/images/jollof.jpg",
  },
  {
    id: 4,
    name: "Meat Pie",
    category: "Snacks",
    rating: 4.8,
    deliveryTime: "15–25 min",
    price: "₦1,200",
    deliveryFee: "₦300",
    description:
      "Golden, flaky pastry filled with seasoned minced meat and potatoes.",
    image: "/images/meatpie.jpg",
  },
  {
    id: 5,
    name: "Ofada Rice & Sauce",
    category: "Nigerian Food",
    rating: 4.8,
    deliveryTime: "30–40 min",
    price: "₦4,000",
    deliveryFee: "₦500",
    description: "Ofada rice served with traditional spicy sauce.",
    image: "/images/ofada.jfif",
  },
  {
    id: 6,
    name: "Beef Suya",
    category: "Nigerian Food",
    rating: 4.9,
    deliveryTime: "20–30 min",
    price: "₦3,500",
    deliveryFee: "₦500",
    description: "Spicy Nigerian grilled beef with yaji seasoning.",
    image: "/images/suya.jfif",
  },
  {
    id: 7,
    name: "Asun",
    category: "Nigerian Food",
    rating: 4.8,
    deliveryTime: "20–30 min",
    price: "₦4,000",
    deliveryFee: "₦500",
    description: "Smoky, spicy roasted goat meat.",
    image: "/images/asun.jfif",
  },
  {
    id: 8,
    name: "Moi Moi",
    category: "Nigerian Food",
    rating: 4.8,
    deliveryTime: "30–40 min",
    price: "₦1,500",
    deliveryFee: "₦300",
    description: "Steamed Nigerian bean pudding.",
    image: "/images/moi moi.jpg",
  },
  {
    id: 9,
    name: "Burger & Fries",
    category: "International Food",
    rating: 4.8,
    deliveryTime: "20–30 min",
    price: "₦5,500",
    deliveryFee: "₦600",
    description: "A juicy burger served with crispy fries.",
    image: "/images/burger.jpg",
  },
  {
    id: 10,
    name: "Grilled Steak",
    category: "International Food",
    rating: 4.8,
    deliveryTime: "30–40 min",
    price: "₦9,500",
    deliveryFee: "₦800",
    description: "Grilled steak prepared for a hearty meal.",
    image: "/images/grilled.jfif",
  },
  {
    id: 11,
    name: "Pizza",
    category: "International Food",
    rating: 4.8,
    deliveryTime: "25–35 min",
    price: "₦6,500",
    deliveryFee: "₦700",
    description: "Freshly prepared pizza with tasty toppings.",
    image: "/images/pizza.jpg",
  },
  {
    id: 12,
    name: "Akara",
    category: "Snacks",
    rating: 4.7,
    deliveryTime: "15–25 min",
    price: "₦1,000",
    deliveryFee: "₦300",
    description: "Crispy Nigerian bean cakes fried until golden.",
    image: "/images/akara.jpg",
  },
  {
    id: 13,
    name: "Puff-Puff",
    category: "Snacks",
    rating: 4.8,
    deliveryTime: "15–25 min",
    price: "₦1,000",
    deliveryFee: "₦300",
    description: "Soft, golden Nigerian fried dough balls.",
    image: "/images/puff-puff-image-1.jpg",
  },
  {
    id: 14,
    name: "Chapman",
    category: "Drinks",
    rating: 4.9,
    deliveryTime: "5–15 min",
    price: "₦1,500",
    deliveryFee: "₦300",
    description: "A refreshing Nigerian non-alcoholic cocktail.",
    image: "/images/chapman.jpg",
  },
  {
    id: 15,
    name: "Fruit Juice",
    category: "Drinks",
    rating: 4.7,
    deliveryTime: "5–15 min",
    price: "₦1,200",
    deliveryFee: "₦300",
    description: "Refreshing fruit juice served chilled.",
    image: "/images/fruitjuice.jpg",
  },
  {
    id: 16,
    name: "Zobo",
    category: "Drinks",
    rating: 4.8,
    deliveryTime: "5–15 min",
    price: "₦800",
    deliveryFee: "₦300",
    description: "Chilled Nigerian hibiscus drink.",
    image: "/images/zobo.jpg",
  },
  {
    id: 17,
    name: "Tigernut Drink",
    category: "Drinks",
    rating: 4.8,
    deliveryTime: "5–15 min",
    price: "₦1,500",
    deliveryFee: "₦300",
    description: "A creamy, naturally sweet tigernut drink.",
    image: "/images/tigernut.jpg",
  },
];

function parseNaira(value: string): number {
  return Number(value.replace(/[₦,\s]/g, "")) || 0;
}

function formatNaira(value: number): string {
  return `₦${value.toLocaleString("en-NG")}`;
}

function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAllFoods, setShowAllFoods] = useState(false);

  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [orderNotes, setOrderNotes] = useState("");

  const [contactStatus, setContactStatus] = useState("");
  const [contactLoading, setContactLoading] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const filteredFoods = foods.filter((food) => {
    const search = searchValue.toLowerCase().trim();

    const matchesSearch =
      food.name.toLowerCase().includes(search) ||
      food.category.toLowerCase().includes(search) ||
      food.description.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" || food.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const visibleFoods = showAllFoods
    ? filteredFoods
    : filteredFoods.slice(0, 12);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce(
    (total, item) => total + parseNaira(item.food.price) * item.quantity,
    0,
  );

  const deliveryFee =
    cart.length > 0
      ? Math.max(...cart.map((item) => parseNaira(item.food.deliveryFee)))
      : 0;

  const total = subtotal + deliveryFee;

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (contactLoading) return;

    setContactLoading(true);
    setContactStatus("");
    setContactSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setContactSuccess(true);
        setContactStatus("Thank you! Your message has been sent successfully.");
        form.reset();
      } else {
        const result = await response.json().catch(() => null);

        setContactStatus(
          result?.errors
            ?.map((error: { message: string }) => error.message)
            .join(" ") ||
            "Sorry, your message could not be sent. Please try again.",
        );
      }
    } catch {
      setContactStatus(
        "A network error occurred. Please check your internet connection and try again.",
      );
    } finally {
      setContactLoading(false);
    }
  }

  function addToCart(food: Food) {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.food.id === food.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.food.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { food, quantity: 1 }];
    });
  }

  function changeQuantity(foodId: number, amount: number) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.food.id === foodId
            ? { ...item, quantity: item.quantity + amount }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(foodId: number) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.food.id !== foodId),
    );
  }

  function orderSingleFood(food: Food) {
    const message = [
      "Hello Cravely! I'd like to order:",
      "",
      `Food: ${food.name}`,
      `Price: ${food.price}`,
      `Estimated delivery fee: ${food.deliveryFee}`,
      `Estimated total: ${formatNaira(
        parseNaira(food.price) + parseNaira(food.deliveryFee),
      )}`,
      "",
      "Please confirm availability and delivery details.",
    ].join("\n");

    openWhatsApp(message);
  }

  function handleCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (cart.length === 0) return;

    const itemsText = cart
      .map(
        (item) =>
          `• ${item.food.name} × ${item.quantity} — ${formatNaira(
            parseNaira(item.food.price) * item.quantity,
          )}`,
      )
      .join("\n");

    const message = [
      "Hello Cravely! I'd like to place an order.",
      "",
      `Name: ${customerName}`,
      `Phone: ${customerPhone}`,
      `Delivery address: ${deliveryAddress}`,
      "",
      "ORDER DETAILS",
      itemsText,
      "",
      `Subtotal: ${formatNaira(subtotal)}`,
      `Estimated delivery fee: ${formatNaira(deliveryFee)}`,
      `Estimated total: ${formatNaira(total)}`,
      orderNotes.trim() ? `Additional notes: ${orderNotes.trim()}` : "",
      "",
      "Please confirm my order and final delivery fee.",
    ]
      .filter(Boolean)
      .join("\n");

    openWhatsApp(message);
  }

  return (
    <main id="top" className="min-h-screen bg-[#F8F1E5]">
      <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />

      <Hero />

      <section
        id="discover"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 py-12 sm:px-6 lg:px-8"
      >
        <span id="restaurants" className="block scroll-mt-28" />

        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#526B3B]">
            Good food. Good mood.
          </p>

          <h2 className="text-3xl font-bold text-[#30203D] sm:text-4xl">
            What are you craving?
          </h2>

          <p className="mt-3 max-w-2xl text-[#655B68]">
            Explore Nigerian favourites, international dishes, tasty snacks and
            refreshing drinks.
          </p>
        </div>

        <div className="mb-6">
          <SearchBar
            value={searchValue}
            onChange={(value: string) => {
              setSearchValue(value);
              setShowAllFoods(false);
            }}
          />
        </div>

        <div id="categories" className="mb-8 scroll-mt-28">
          <CategoryList
            selected={selectedCategory}
            onSelect={(category: string) => {
              setSelectedCategory(category);
              setShowAllFoods(false);
            }}
          />
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-[#30203D]">
            {selectedCategory === "All" ? "Explore our menu" : selectedCategory}
          </h3>

          <p className="text-sm text-[#655B68]">
            {filteredFoods.length}{" "}
            {filteredFoods.length === 1 ? "item" : "items"}
          </p>
        </div>

        {filteredFoods.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visibleFoods.map((food) => (
                <RestaurantCard
                  key={food.id}
                  restaurant={food}
                  onExplore={(item: Food) => setSelectedFood(item)}
                />
              ))}
            </div>

            {filteredFoods.length > 12 && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllFoods((current) => !current)}
                  className="rounded-full bg-[#526B3B] px-8 py-3 font-semibold text-white transition hover:bg-[#40552E]"
                >
                  {showAllFoods ? "Show Less" : "View More"}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="rounded-2xl bg-white/70 px-6 py-14 text-center">
            <h3 className="text-xl font-bold text-[#30203D]">No items found</h3>

            <p className="mt-2 text-[#655B68]">
              Try another search or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchValue("");
                setSelectedCategory("All");
                setShowAllFoods(false);
              }}
              className="mt-5 rounded-full bg-[#B9F451] px-6 py-3 font-semibold text-[#30203D]"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-28 bg-white/70 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#526B3B]">
              Easy as one, two, three
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#30203D] sm:text-4xl">
              How Cravely works
            </h2>

            <p className="mt-3 leading-7 text-[#655B68]">
              Find something delicious, build your order, and confirm the
              details with us.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Discover your meal",
                description:
                  "Browse the menu or use search and categories to find what you're craving.",
              },
              {
                number: "02",
                title: "Choose your favourites",
                description:
                  "Open a food item to see its description, price, delivery estimate and ordering options.",
              },
              {
                number: "03",
                title: "Place your order",
                description:
                  "Add items to your cart or order directly through WhatsApp. Confirm final delivery details before payment.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-[#E7DDCE] bg-[#F8F1E5] p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B9F451] font-extrabold text-[#30203D]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#30203D]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-[#655B68]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#discover"
              className="inline-flex items-center gap-2 rounded-full bg-[#526B3B] px-6 py-3 font-semibold text-white transition hover:bg-[#40552E]"
            >
              Explore the menu <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#526B3B]">
              We&apos;d love to hear from you
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#30203D] sm:text-4xl">
              Contact Cravely
            </h2>

            <p className="mt-4 max-w-lg leading-7 text-[#655B68]">
              Have a question about the menu, an order, or delivery? Send us a
              message or contact us directly.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:chyjanique@gmail.com"
                className="flex items-center gap-3 text-[#30203D] transition hover:text-[#526B3B]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                  <Mail size={20} />
                </span>
                chyjanique@gmail.com
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Cravely! I'd like to make an enquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#30203D] transition hover:text-[#526B3B]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                  <MessageCircle size={20} />
                </span>
                WhatsApp: 08138382520
              </a>
            </div>
          </div>

          <form
            onSubmit={handleContactSubmit}
            className="rounded-2xl border border-[#E7DDCE] bg-white p-6 shadow-sm sm:p-8"
          >
            <h3 className="text-xl font-bold text-[#30203D]">
              Send us a message
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#655B68]">
              Complete the form and we&apos;ll get back to you as soon as we
              can.
            </p>

            <input
              type="hidden"
              name="_subject"
              value="New message from Cravely"
            />

            <div className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-[#30203D]"
                >
                  Your name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  disabled={contactLoading}
                  className="w-full rounded-xl border border-[#E7DDCE] bg-[#F8F1E5]/50 px-4 py-3 text-[#30203D] outline-none transition focus:border-[#526B3B] focus:ring-2 focus:ring-[#526B3B]/15 disabled:opacity-60"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-[#30203D]"
                >
                  Email address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={contactLoading}
                  className="w-full rounded-xl border border-[#E7DDCE] bg-[#F8F1E5]/50 px-4 py-3 text-[#30203D] outline-none transition focus:border-[#526B3B] focus:ring-2 focus:ring-[#526B3B]/15 disabled:opacity-60"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-[#30203D]"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  disabled={contactLoading}
                  className="w-full resize-y rounded-xl border border-[#E7DDCE] bg-[#F8F1E5]/50 px-4 py-3 text-[#30203D] outline-none transition focus:border-[#526B3B] focus:ring-2 focus:ring-[#526B3B]/15 disabled:opacity-60"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={contactLoading}
                className="w-full rounded-full bg-[#526B3B] px-6 py-3 font-bold text-white transition hover:bg-[#40552E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#526B3B] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {contactLoading ? "Sending..." : "Send message"}
              </button>

              {contactStatus && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl px-4 py-3 text-sm leading-6 ${
                    contactSuccess
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {contactStatus}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <Footer />

      {selectedFood && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center overflow-y-auto bg-[#1D1723]/65 p-4"
          onClick={() => setSelectedFood(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="food-details-title"
            className="relative my-auto max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-[#F8F1E5] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close food details"
              onClick={() => setSelectedFood(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#30203D] shadow transition hover:bg-[#B9F451]"
            >
              <X size={21} />
            </button>

            <div className="relative h-60 w-full bg-[#EDE5D8]">
              <Image
                src={selectedFood.image}
                alt={selectedFood.name}
                fill
                sizes="(max-width: 640px) 100vw, 512px"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <span className="rounded-full bg-[#B9F451] px-3 py-1 text-xs font-bold text-[#30203D]">
                {selectedFood.category}
              </span>

              <h2
                id="food-details-title"
                className="mt-4 text-2xl font-extrabold text-[#30203D]"
              >
                {selectedFood.name}
              </h2>

              <p className="mt-3 leading-7 text-[#655B68]">
                {selectedFood.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#655B68]">
                <span className="flex items-center gap-2">
                  <Star size={16} fill="#F5B942" color="#F5B942" />
                  {selectedFood.rating} rating
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={16} />
                  {selectedFood.deliveryTime}
                </span>

                <span className="flex items-center gap-2">
                  <Bike size={17} />
                  {selectedFood.deliveryFee} delivery estimate
                </span>
              </div>

              <p className="mt-6 text-3xl font-extrabold text-[#30203D]">
                {selectedFood.price}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => {
                    addToCart(selectedFood);
                    setSelectedFood(null);
                    setCartOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#526B3B] px-5 py-3 font-bold text-white transition hover:bg-[#40552E]"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>

                <button
                  type="button"
                  onClick={() => orderSingleFood(selectedFood)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#B9F451] px-5 py-3 font-bold text-[#30203D] transition hover:bg-[#A6E83A]"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {cartOpen && (
        <div
          className="fixed inset-0 z-70 flex justify-end bg-[#1D1723]/60"
          onClick={() => setCartOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            className="flex h-full w-full max-w-xl flex-col bg-[#F8F1E5] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E7DDCE] px-5 py-4 sm:px-7">
              <div>
                <h2
                  id="cart-title"
                  className="text-2xl font-extrabold text-[#30203D]"
                >
                  Your Cart
                </h2>

                <p className="mt-1 text-sm text-[#655B68]">
                  {cartCount} {cartCount === 1 ? "item" : "items"} selected
                </p>
              </div>

              <button
                type="button"
                aria-label="Close cart"
                onClick={() => setCartOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#30203D] transition hover:bg-[#B9F451]"
              >
                <X size={21} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <ShoppingCart size={44} className="text-[#526B3B]" />

                <h3 className="mt-4 text-xl font-bold text-[#30203D]">
                  Your cart is empty
                </h3>

                <p className="mt-2 max-w-sm text-[#655B68]">
                  Explore the menu and add something delicious to get started.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setCartOpen(false);
                    document
                      .getElementById("discover")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-5 rounded-full bg-[#526B3B] px-6 py-3 font-bold text-white transition hover:bg-[#40552E]"
                >
                  Browse food
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-7">
                  {cart.map((item) => (
                    <article
                      key={item.food.id}
                      className="flex gap-4 rounded-2xl border border-[#E7DDCE] bg-white p-3 sm:p-4"
                    >
                      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#EDE5D8]">
                        <Image
                          src={item.food.image}
                          alt={item.food.name}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-bold text-[#30203D]">
                              {item.food.name}
                            </h3>

                            <p className="mt-1 text-sm text-[#655B68]">
                              {item.food.price}
                            </p>
                          </div>

                          <button
                            type="button"
                            aria-label={`Remove ${item.food.name}`}
                            onClick={() => removeFromCart(item.food.id)}
                            className="rounded-full p-2 text-[#655B68] transition hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>

                        <div className="mt-3 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 rounded-full border border-[#E7DDCE] px-2 py-1">
                            <button
                              type="button"
                              aria-label={`Decrease ${item.food.name} quantity`}
                              onClick={() => changeQuantity(item.food.id, -1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-[#B9F451]/50"
                            >
                              <Minus size={14} />
                            </button>

                            <span className="min-w-4 text-center text-sm font-bold text-[#30203D]">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              aria-label={`Increase ${item.food.name} quantity`}
                              onClick={() => changeQuantity(item.food.id, 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-[#B9F451]/50"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <p className="text-sm font-extrabold text-[#30203D]">
                            {formatNaira(
                              parseNaira(item.food.price) * item.quantity,
                            )}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="max-h-[55%] overflow-y-auto border-t border-[#E7DDCE] bg-white px-5 py-5 sm:px-7">
                  <form onSubmit={handleCheckout} className="space-y-4">
                    <h3 className="text-lg font-extrabold text-[#30203D]">
                      Delivery details
                    </h3>

                    <div>
                      <label
                        htmlFor="checkout-name"
                        className="mb-1.5 block text-sm font-semibold text-[#30203D]"
                      >
                        Full name
                      </label>

                      <input
                        id="checkout-name"
                        value={customerName}
                        onChange={(event) =>
                          setCustomerName(event.target.value)
                        }
                        autoComplete="name"
                        required
                        className="w-full rounded-xl border border-[#E7DDCE] px-4 py-3 text-[#30203D] outline-none focus:border-[#526B3B] focus:ring-2 focus:ring-[#526B3B]/15"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="checkout-phone"
                        className="mb-1.5 block text-sm font-semibold text-[#30203D]"
                      >
                        Phone number
                      </label>

                      <input
                        id="checkout-phone"
                        type="tel"
                        value={customerPhone}
                        onChange={(event) =>
                          setCustomerPhone(event.target.value)
                        }
                        autoComplete="tel"
                        required
                        className="w-full rounded-xl border border-[#E7DDCE] px-4 py-3 text-[#30203D] outline-none focus:border-[#526B3B] focus:ring-2 focus:ring-[#526B3B]/15"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="checkout-address"
                        className="mb-1.5 block text-sm font-semibold text-[#30203D]"
                      >
                        Delivery address
                      </label>

                      <textarea
                        id="checkout-address"
                        value={deliveryAddress}
                        onChange={(event) =>
                          setDeliveryAddress(event.target.value)
                        }
                        autoComplete="street-address"
                        required
                        rows={2}
                        className="w-full rounded-xl border border-[#E7DDCE] px-4 py-3 text-[#30203D] outline-none focus:border-[#526B3B] focus:ring-2 focus:ring-[#526B3B]/15"
                        placeholder="Where should we deliver?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="checkout-notes"
                        className="mb-1.5 block text-sm font-semibold text-[#30203D]"
                      >
                        Additional notes (optional)
                      </label>

                      <textarea
                        id="checkout-notes"
                        value={orderNotes}
                        onChange={(event) => setOrderNotes(event.target.value)}
                        rows={2}
                        className="w-full rounded-xl border border-[#E7DDCE] px-4 py-3 text-[#30203D] outline-none focus:border-[#526B3B] focus:ring-2 focus:ring-[#526B3B]/15"
                        placeholder="Delivery instructions or preferences"
                      />
                    </div>

                    <div className="space-y-2 border-t border-[#E7DDCE] pt-4 text-sm text-[#655B68]">
                      <div className="flex justify-between gap-4">
                        <span>Subtotal</span>
                        <span>{formatNaira(subtotal)}</span>
                      </div>

                      <div className="flex justify-between gap-4">
                        <span>Estimated delivery fee</span>
                        <span>{formatNaira(deliveryFee)}</span>
                      </div>

                      <p className="text-xs leading-5">
                        Delivery is estimated using the highest listed fee in
                        your cart. Cravely should confirm the final delivery fee
                        with you.
                      </p>

                      <div className="flex justify-between gap-4 border-t border-[#E7DDCE] pt-3 text-lg font-extrabold text-[#30203D]">
                        <span>Estimated total</span>
                        <span>{formatNaira(total)}</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#526B3B] px-6 py-3.5 font-bold text-white transition hover:bg-[#40552E]"
                    >
                      <MessageCircle size={19} />
                      Continue to WhatsApp
                    </button>

                    <p className="text-center text-xs leading-5 text-[#655B68]">
                      Your order will open in WhatsApp for confirmation. This
                      checkout does not process online payments.
                    </p>
                  </form>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
