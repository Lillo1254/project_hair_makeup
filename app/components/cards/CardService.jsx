export default function CardService({ title, description, image }) {
  return (
    <div className="p-1 text-center">
      <img
        src={image}
        alt={title}
        className="mx-auto mb-6 h-42 w-42 rounded-full object-cover grayscale
                   shadow-xl shadow-white/30
                   transition-all duration-500 hover:grayscale-0"
      />
      <h3 className="text-sm tracking-widest uppercase">{title}</h3>
      <p className="mt-4 text-sm text-gray-400">{description}</p>
    </div>
  );
}
