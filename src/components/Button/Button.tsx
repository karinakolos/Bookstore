import { WrapperButton, ButtonLog } from "./Button.styled";

export function Button({
  title,
  onClickBtn,
}: {
  title: string;
  onClickBtn: () => void;
}) {
  return (
    <WrapperButton>
      <ButtonLog onClick={onClickBtn}>{title}</ButtonLog>
    </WrapperButton>
  );
}
