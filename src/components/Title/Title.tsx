import React from "react";
import { Text } from "./Title.styled";

export function Title({ title }: { title: string }) {
  return <Text>{title}</Text>;
}
