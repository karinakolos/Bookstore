import * as React from "react";
import { WrapperButton, Button } from "./ButtonNav.styled";

export function ButtonNav({ title }: { title: string }) {
  return (
    <WrapperButton>
      <Button>{title}</Button>
    </WrapperButton>
  );
}
