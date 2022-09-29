import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import { Title } from "../../components/Title/Title";

import {
  Wrapper,
  WrapperForm,
  WrapperItem,
  TitleForm,
  Label,
  Necessarily,
  ItemTitle,
  ItemDescription,
  Book,
  Books,
  WrapperCol,
  Item,
} from "./CheckOutPage.styled";

export function CheckOutPage() {
  const { items, totalPrice } = useSelector((state) => state.cart);

  const submitForm = () => {};
  return (
    <>
      <Title title="Making an order" />
      <Wrapper>
        <WrapperForm>
          <TitleForm>Payment and delivery</TitleForm>
          <Label>
            Your name <Necessarily>&#42;</Necessarily>
          </Label>
          <input name="text" type="text" />
          <Label>
            Country <Necessarily>&#42;</Necessarily>
          </Label>
          <input name="text" type="text" />
          <Label>
            Address <Necessarily>&#42;</Necessarily>
          </Label>
          <input
            name="text"
            type="text"
            placeholder="House number and street name"
          />
          <Label>
            Phone number <Necessarily>&#42;</Necessarily>
          </Label>
          <input name="text" type="text" />
          <Label>Email (optional)</Label>
          <input name="email" type="email" />

          <TitleForm>Details</TitleForm>
          <Label>Order Notes (optional)</Label>
          <textarea></textarea>
        </WrapperForm>
        <WrapperItem>
          <ItemTitle> Your order</ItemTitle>

          <ItemDescription>Order</ItemDescription>
          <Books>
            {items.map((item) => (
              <>
                <Book>{item.title}</Book> <Book>&#215;{item.count}</Book>
                <Book>${item.priceToRedux}</Book>
              </>
            ))}
          </Books>
          <WrapperCol>
            <Item>VAT:</Item>
            <Item>${Math.floor(totalPrice * 0.18 * 100) / 100}</Item>
          </WrapperCol>
          <WrapperCol>
            <Item>Sum:</Item>
            <Item>
              ${Math.floor((totalPrice - totalPrice * 0.18) * 100) / 100}
            </Item>
          </WrapperCol>

          <WrapperCol>
            <Item>Delivery:</Item>
            <Item>
              <select id="selectvalue">
                <option>Pickup</option>
                {totalPrice > 30 && <option>Free shipping</option>}
              </select>
            </Item>
          </WrapperCol>
          <Item>Free shipping from $30</Item>
          <Book>Payment upon delivery</Book>
          <Button title="Confirm the order" onClickAdd={} />
        </WrapperItem>
      </Wrapper>
    </>
  );
}
