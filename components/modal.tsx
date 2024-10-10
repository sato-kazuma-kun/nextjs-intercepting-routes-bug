"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="border p-4 rounded backdrop:bg-slate-300/50 max-w-[400px]"
      onClose={() => router.back()}
    >
      {children}
      <Button
        onClick={() => {
          if (dialogRef.current) {
            dialogRef.current.close();
          }
        }}
      >
        Close
      </Button>
    </dialog>
  );
}
