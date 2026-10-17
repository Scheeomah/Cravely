import { Utensils } from "lucide-react";

export default function Logo() {
  return (
    <a href="/" className="inline-flex items-center gap-2">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B9F451]">
        <Utensils size={23} color="#30203D" strokeWidth={2.2} />
      </span>

      <span className="text-2xl font-extrabold tracking-tight text-[#30203D]">
        Cravely
      </span>
    </a>
  );
}
