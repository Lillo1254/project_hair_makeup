"use client";
import { use, useEffect } from "react";
import {observerReveal} from "../../function/basic";
export default function ObserverWrap({classSearch , classAdd , percent}){

    useEffect(() => { observerReveal(classSearch, classAdd, percent); }, [classSearch, classAdd, percent]);
    return(<></>)
}