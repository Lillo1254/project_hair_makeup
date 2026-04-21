import Link from "next/link";

export default function CardService({ title, description, image }) {
  return (
    <Link href={`/servicesPage/${title.toLowerCase()}`} className="hover:scale-110 transition duration-300">
      <div className="p-1 text-center">
        <img
          src={image}
          alt={title}
          className="mx-auto mb-6 h-42 w-42 rounded-full object-cover filter grayscale-55 brightness-50 saturate-0
                   shadow-xl shadow-white/30
                   transition-all duration-900 test_services"
        />
        <h3 className="text-sm tracking-widest uppercase">{title}</h3>
        <p className="mt-4 text-sm text-gray-400">{description}</p>
      </div>
    </Link>
  );
}
