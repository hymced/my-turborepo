'use client'

import { Styled } from "./button.styled";

export function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
  <Styled
    variant="secondary"
    className={className} 
    onClick={() => console.log("hello")}>
    {children}
  </Styled>
  );
}
