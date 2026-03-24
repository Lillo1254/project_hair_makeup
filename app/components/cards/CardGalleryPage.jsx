
export default function CardGalleryPage({ image }) {
return (
    <>
<img
src={image}
alt="parrucchiere guidonia roma"
className="h-30 md:h-80 w-full object-center grayscale hover:grayscale-0 transition rounded-md"
/>
</>
);
}