export default function Header({ title, subtitle }) {
return (
<header className="absolute top-10 left-0 w-full p-6 text-center z-20">
<h1 className="text-4xl tracking-widest uppercase playfair_text">{title}</h1>
<p className="text-sm mt-10 tracking-widest text-gray-400">{subtitle}</p>
</header>
);
}