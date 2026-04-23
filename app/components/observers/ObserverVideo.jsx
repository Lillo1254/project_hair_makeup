"use client";
import { useEffect } from "react";
import {observerVideo} from "../../function/basic";
export default function ObserverWrapVideo({classSearch , attrName, attrValue , percent = 0.3}){

    useEffect(() => { observerVideo(classSearch, attrName, attrValue, percent); }, [classSearch, attrName, attrValue, percent]);
    return(<></>)
}