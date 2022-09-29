import * as React from "react";
import { ButtonNav } from "../../components/ButtonNav/ButtonNav";
import { SideNavLink } from "./RegistrationPage.styled";
import { AppRoute } from "./../../enums/router";

import { Wrapper, WrapperNav } from "./RegistrationPage.styled";
import { SignUp } from "../../components/SignUp/SignUp";

export function RegistrationPage() {
  return (
    <div>
      <Wrapper>
        <WrapperNav>
          <SideNavLink to={AppRoute.Login}>
            <ButtonNav title="sign in" />
          </SideNavLink>
          <SideNavLink to={AppRoute.Reg}>
            <ButtonNav title="sign up" />
          </SideNavLink>
        </WrapperNav>
        <SignUp />
      </Wrapper>
    </div>
  );
}
