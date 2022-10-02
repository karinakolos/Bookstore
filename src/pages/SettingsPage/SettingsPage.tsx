import * as React from "react";
import { Link } from "react-router-dom";

import { removeUser } from "../../store/slices/userSlice";
import { Title } from "../../components/Title/Title";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { AppRoute } from "../../enums/router";
import ChangePassword from "../../components/ChangeProfile/ChangePassword";
import ChangeUserName from "../../components/ChangeProfile/ChangeUserName";
import ChangeEmail from "../../components/ChangeProfile/ChangeEmail";

import {
  TitleSettings,
  Wrapper,
  WrapperCol,
  Item,
  ItemChange,
  LogOut,
  TitleSettingsFirst,
} from "./SettingsPage.styled";

const SettingsPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { name, email, id } = useAppSelector((state) => state.user);

  return (
    <>
      <Title title="settings" />
      <Wrapper>
        <TitleSettingsFirst>Account</TitleSettingsFirst>
        <WrapperCol>
          <Item>User name:</Item>
          <Item>{name}</Item>
        </WrapperCol>
        <WrapperCol>
          <Item>Email:</Item>
          <Item>{email}</Item>
        </WrapperCol>
        <WrapperCol>
          <Item>User Id:</Item>
          <Item>{id}</Item>
        </WrapperCol>
        <TitleSettings>Change basic information</TitleSettings>
        <ItemChange>Change user name:</ItemChange>
        <ChangeUserName />
        <ItemChange>Change email:</ItemChange>
        <ChangeEmail />
        <ItemChange>Change password:</ItemChange>
        <ChangePassword />
        <TitleSettings>Log out</TitleSettings>
        <LogOut>
          <Link
            to={AppRoute.Main}
            onClick={() => {
              dispatch(removeUser());
            }}
          >
            Log out from {email}
            &#8594;
          </Link>
        </LogOut>
      </Wrapper>
    </>
  );
};

export default SettingsPage;
