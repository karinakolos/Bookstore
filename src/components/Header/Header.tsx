import * as React from "react";
import debounce from "lodash.debounce";
import {
  HeaderContainer,
  LogoWrapper,
  SearchBar,
  WrapperButtons,
  HeaderArrow,
  ButtonLogOut,
  Count,
} from "./header.styled";

import { SideNavLink } from "./header.styled";
import { AppRoute } from "./../../enums/router";
import logo from "./../../icons/logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../../store/slices/userSlice";
import { UserIcon } from "./UserIcon";
import { BasketIcon } from "./BasketIcon";
import { LikeIcon } from "./LikeIcon";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { LogOutSvg } from "./LogOutSvg";
import { SearchContext } from "../../App";
import { useSelector } from "react-redux";
import { setCurrentPage } from "../../store/slices/paginationSlice";

export function Header() {
  const dispatch = useAppDispatch();
  const { items } = useSelector((state) => state.cart);
  const { isAuth, email } = useAuth();
  const [value, setValue] = React.useState("");
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );

  const onChangeInput = (event: any) => {
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
          <input
            ref={inputRef}
            value={value}
            onChange={onChangeInput}
            placeholder="Search..."
          />
          {value && (
            <svg
              onClick={() => {
                setSearchValue("");
                setValue("");
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
        </SearchBar>
        <WrapperButtons>
          <SideNavLink to={AppRoute.Favorites}>
            <BasketIcon />
          </SideNavLink>
          <SideNavLink to={AppRoute.Basket}>
            <LikeIcon />
            <Count>{totalCount}</Count>
          </SideNavLink>
          {isAuth ? (
            <ButtonLogOut onClick={() => dispatch(removeUser())}>
              Log out from {email} <LogOutSvg />
            </ButtonLogOut>
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
