
export default function CardGallery({ image }) {
return (
<img
src={image}
alt="parrucchiere guidonia roma"
className="h-full md:h-full w-full object-cover filter grayscale brightness-50 saturate-0 transition-all duration-[1700ms]  rounded-md prova_test"

/>
);
}