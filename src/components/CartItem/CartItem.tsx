import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../store/slices/cartSlice";
import {
  Wrapper,
  WrapperCartItem,
  WrapperImageItem,
  WrapperDescItem,
  Title,
  Subtitle,
  Quantity,
  Value,
  Price,
  ButtonAddItem,
  ButtonDeleteItem,
  DeleteItem,
} from "./CartItem.styled";

export default function CartItem({
  isbn13,
  title,
  subtitle,
  count,
  priceToRedux,
  image,
}) {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(
      addItem({
        isbn13,
      })
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem(isbn13));
  };
  const onClickRemove = () => {
    dispatch(removeItem(isbn13));
  };
  return (
    <Wrapper>
      <WrapperCartItem>
        <WrapperImageItem>
          <img src={image} alt="Item" />
        </WrapperImageItem>
        <WrapperDescItem>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Quantity>
            <ButtonDeleteItem onClick={onClickMinus}>&#8722;</ButtonDeleteItem>
            <Value>{count}</Value>

            <ButtonAddItem onClick={onClickPlus}>&#43;</ButtonAddItem>
          </Quantity>
        </WrapperDescItem>

        <Price>${Math.floor(priceToRedux * count * 100) / 100}</Price>
        <DeleteItem onClick={onClickRemove}>&#215;</DeleteItem>
      </WrapperCartItem>
    </Wrapper>
  );
}
