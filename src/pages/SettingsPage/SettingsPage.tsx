import * as React from "react";

import { Header } from "../../components/Header/Header";

import { WrapperMainContent, Wrapper, Text } from "./SettingsPage.styled";

export function SettingsPage() {
  return (
    <Wrapper>
      <Header />
      <WrapperMainContent>
        <Text> Settings</Text>
      </WrapperMainContent>
    </Wrapper>
  );
}
