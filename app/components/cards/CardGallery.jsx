
export default function CardGallery({ image }) {
return (
<img
src={image}
alt="parrucchiere guidonia roma"
className="h-full md:h-full w-full object-cover grayscale-55 hover:grayscale-0 md:grayscale md:hover:grayscale-0 transition rounded-md"
/>
);
}