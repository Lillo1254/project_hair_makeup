import Image from "next/image";




export default function LogoSvg({width, height}){
    return(
    <>
    <Image 
    src="/copilotlogo.svg"
    width={width}
    height={height}
    alt="logo"
    className="svgLogo"
    />
    </>
    )
}