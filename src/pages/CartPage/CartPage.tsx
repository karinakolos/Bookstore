import * as React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

import CartEmpty from "../../components/CartEmpty/cartEmpty";
import { useAppSelector } from "../../hooks/redux-hooks";
import { Button } from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import { AppRoute } from "../../enums/router";
import { Title } from "../../components/Title/Title";

import {
  Wrapper,
  WrapperButton,
  TotalSum,
  TotalSumItems,
  TotalSumItem,
  TitleItem,
  Summ,
  Vat,
  FinalSumm,
  Value,
} from "./CartPage.styled";

const CartPage: React.FC = () => {
  const { items, totalPrice } = useAppSelector((state) => state.cart);
  const { isAuth, email } = useAuth();
  const vat = Math.floor(totalPrice * 0.18 * 100) / 100;

  if (items.length == 0) {
    return <CartEmpty />;
  }
  return (
    <Wrapper>
      <>
        <Title title="Your cart" />
      </>
      {items.map((item) => (
        <CartItem key={item.isbn13} {...item} />
      ))}
      <TotalSum>
        <TotalSumItems>
          <TotalSumItem>
            <TitleItem>Sum total</TitleItem>
            <Summ>${Math.floor(totalPrice * 100) / 100}</Summ>
          </TotalSumItem>
          <TotalSumItem>
            <TitleItem>VAT</TitleItem>
            <Vat>${vat}</Vat>
          </TotalSumItem>
          <TotalSumItem>
            <FinalSumm>Total: </FinalSumm>
            <Value>${Math.floor((totalPrice - vat) * 100) / 100}</Value>
          </TotalSumItem>
          {isAuth ? (
            <Link to={AppRoute.CheckOut}>
              <WrapperButton>
                <Button title="Proceed to checkout" onClickBtn={() => {}} />
              </WrapperButton>
            </Link>
          ) : (
            <WrapperButton>
              To order, you need to log in to your account.
              <span> </span>
              <Link to="/sign_in">Log in</Link>
            </WrapperButton>
          )}
        </TotalSumItems>
      </TotalSum>
    </Wrapper>
  );
};

export default CartPage;
