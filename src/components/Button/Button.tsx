import * as React from "react";
import { WrapperButton, ButtonLog } from "./Button.styled";

export function Button({
  title,
  onClickAdd,
}: {
  title: string;
  onClickAdd: any;
}) {
  return (
    <WrapperButton>
      <ButtonLog onClick={onClickAdd}>{title}</ButtonLog>
    </WrapperButton>
  );
}
