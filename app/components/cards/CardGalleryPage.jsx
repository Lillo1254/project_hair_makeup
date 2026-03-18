
export default function CardGalleryPage({ image }) {
return (
<img
src={image}
alt="Galleria"
className="h-80 w-full object-contain grayscale hover:grayscale-0 transition rounded-md"
/>
);
}