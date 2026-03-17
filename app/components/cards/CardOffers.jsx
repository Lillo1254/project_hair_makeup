
export default function CardOffers({ image }) {
return (
<img
src={image}
alt="Galleria"
className=" w-full object-contain grayscale hover:grayscale-0 transition rounded-md"
/>
);
}