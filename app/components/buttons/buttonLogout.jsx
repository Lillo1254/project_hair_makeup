"use client";

import {useRouter} from "next/navigation";

export default function ButtonLogout({label, className}) {

    const router = useRouter();

    const handleLogout = async ()=>{
        await fetch("/api/logout", {method: "POST"});
        router.push("/");
    }

    return (
        <button onClick={handleLogout} className={className}>
            {label}
        </button>
    )
}