
export default function CardGallery({ image }) {
return (
<img
src={image}
alt="parrucchiere guidonia roma"
className="h-40 w-full object-cover grayscale hover:grayscale-0 transition rounded-md"
/>
);
}