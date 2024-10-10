"use client";

import { Button as NextUIButton, ButtonProps } from "@nextui-org/button";
import { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}

export default function Button({ children, ...rest }: CustomButtonProps) {
  return <NextUIButton {...rest}>{children}</NextUIButton>;
}
