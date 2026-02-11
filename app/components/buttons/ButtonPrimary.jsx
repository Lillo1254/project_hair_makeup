export default function ButtonPrimary ({ label, onClick, variant = "outline" }) {
const base = "px-8 py-3 text-sm tracking-widest uppercase transition";
const styles =
variant === "filled"
? "bg-white text-black hover:bg-neutral-200"
: "border border-white hover:bg-white hover:text-black";


return (
<button onClick={onClick} className={`${base} ${styles}`}>
{label}
</button>
);
}