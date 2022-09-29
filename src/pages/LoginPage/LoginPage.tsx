import * as React from "react";

import { ButtonNav } from "../../components/ButtonNav/ButtonNav";

import { SideNavLink } from "./LoginPage.styled";
import { AppRoute } from "./../../enums/router";

import { Wrapper, WrapperNav } from "./LoginPage.styled";
import { Login } from "../../components/Login/Login";

export function LoginPage() {
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

        <Login />
      </Wrapper>
    </div>
  );
}
