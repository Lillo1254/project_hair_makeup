
export default function CardGallery({ image }) {
return (
<img
src={image}
alt="parrucchiere guidonia roma"
className="h-50 md:h-96 w-full object-cover grayscale-55 hover:grayscale-0 md:grayscale md:hover:grayscale-0 transition rounded-md"
/>
);
}