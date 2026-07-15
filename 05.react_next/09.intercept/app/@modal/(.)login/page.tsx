"use client"

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ModalLogin(){
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    return(
        <dialog
            ref={dialogRef}
            onClick={()=>router.back()}
            className="m-auto border p-2 rounded backdrop:bg-slate-500/30">
                <button
                onClick={()=> {dialogRef.current?.close()}}>
                    X
                </button>
                <h1 className="text-4xl font-bold">
                    Modal Login Page
                </h1>
            </dialog>
    );
}