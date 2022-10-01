import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { AppRoute } from "../../enums/router";
import emptyCart from "../../icons/emptyCart.png";

import { Wrapper, Title, MainText, Image } from "./cartEmpty.styled";

const cartEmpty = () => {
  return (
    <Wrapper>
      <Title>Your shopping cart is empty</Title>
      <MainText>To select a book you need to go to the catalog</MainText>
      <Image>
        <img src={emptyCart} alt="Empty cart" />
      </Image>
      <Link to={AppRoute.Main}>
        <Button title="catalog" onClickBtn={() => {}} />
      </Link>
    </Wrapper>
  );
};

export default cartEmpty;
