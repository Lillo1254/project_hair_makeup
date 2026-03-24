'use client';
import { useRouter } from "next/navigation";

type ButtonNavigateProps = {
  label: string;
  href: string;
  variant?: "outline" | "filled";
};

export default function ButtonNavigate({
  label,
  href,
  variant = "outline",
}: ButtonNavigateProps) {
  const base = "px-8 py-3 text-sm tracking-widest uppercase transition";
  const styles =
    variant === "filled"
      ? "bg-white text-black hover:bg-neutral-200"
      : "border border-white hover:bg-white hover:text-black hover:rounded-3xl  transition-all duration-300";

  const router = useRouter();

  return (
    <button onClick={() => router.push(href)} className={`${base} ${styles}`}>
      {label}
    </button>
  );
}