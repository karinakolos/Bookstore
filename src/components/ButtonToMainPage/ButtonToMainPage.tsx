import * as React from "react";
import { Link } from "react-router-dom";
import { WrapperButton } from "./ButtonToMainPage.styled";
import { AppRoute } from "../../enums/router";
import { Icon } from "./Icon";
export function ButtonToMainPage() {
  return (
    <Link to={AppRoute.Main}>
      <WrapperButton>
        <Icon />
      </WrapperButton>
    </Link>
  );
}
