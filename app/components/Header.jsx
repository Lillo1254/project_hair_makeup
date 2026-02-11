export default function Header({ title, subtitle }) {
return (
<header className="absolute top-25 left-0 w-full p-6 text-center z-20">
<h1 className="text-lg tracking-widest uppercase">{title}</h1>
<p className="text-xs tracking-widest text-gray-400">{subtitle}</p>
</header>
);
}