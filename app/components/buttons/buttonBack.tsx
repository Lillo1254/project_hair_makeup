'use client'

interface ButtonBackProps {
    label: string;
    className?: string;
}

import { useRouter } from "next/navigation";
export default function ButtonBack({ label, className }: ButtonBackProps) {

    const router = useRouter();

    return (

        <button onClick={() => router.back()} className={className}>
            {label}
        </button>
    )
}