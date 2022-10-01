import * as React from "react";
import debounce from "lodash.debounce";
import { Link, useLocation } from "react-router-dom";

import { SideNavLink } from "./header.styled";
import { AppRoute } from "./../../enums/router";
import logo from "./../../icons/logo.svg";
import { useAuth } from "../../hooks/use-auth";
import { UserIcon } from "./UserIcon";
import { CartIcon } from "./CartIcon";
import { LikeIcon } from "./LikeIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { setCurrentPage } from "../../store/slices/paginationSlice";
import { ProfileIcon } from "./ProfileIcon";
import { setSearchValue } from "../../store/slices/searchSlice";

import {
  HeaderContainer,
  LogoWrapper,
  SearchBar,
  WrapperButtons,
  HeaderArrow,
  ButtonSettings,
  Count,
} from "./header.styled";

export function Header() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);
  const { isAuth, email } = useAuth();
  const { pathname } = useLocation();
  const [value, setValue] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
    dispatch(setCurrentPage(1));
  };

  return (
    <HeaderArrow>
      <HeaderContainer>
        <LogoWrapper>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </LogoWrapper>
        <SearchBar>
          {pathname === "/" && (
            <>
              <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                placeholder="Search..."
              />
              {value && (
                <svg
                  onClick={() => {
                    setValue("");
                    dispatch(setSearchValue(""));
                    dispatch(setCurrentPage(1));
                    inputRef.current?.focus();
                  }}
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              )}
            </>
          )}
        </SearchBar>
        <WrapperButtons>
          <SideNavLink to={AppRoute.Favorites}>
            <CartIcon />
          </SideNavLink>
          <SideNavLink to={AppRoute.Cart}>
            <LikeIcon />
            <Count>{totalCount}</Count>
          </SideNavLink>
          {isAuth ? (
            <ButtonSettings>
              <SideNavLink to={AppRoute.Settings}>
                {email}
                <ProfileIcon />
              </SideNavLink>
            </ButtonSettings>
          ) : (
            <SideNavLink to={AppRoute.Login}>
              <UserIcon />
            </SideNavLink>
          )}
        </WrapperButtons>
      </HeaderContainer>
    </HeaderArrow>
  );
}
