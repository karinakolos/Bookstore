import * as React from "react";

import { WrapperFooter, Items, Item } from "./Footer.styled";

const Foooter: React.FC = () => {
  return (
    <WrapperFooter>
      <Items>
        <Item>©2022 Bookstore</Item>
        <Item>All rights reserved</Item>
      </Items>
    </WrapperFooter>
  );
};

export default Foooter;
