import React from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
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

type ItemProps = {
  isbn13: string;
  image?: string;
  title?: string;
  subtitle?: string;
  priceToRedux: number;
  count: number;
};

const CartItem: React.FC<ItemProps> = ({
  isbn13,
  title,
  subtitle,
  count,
  priceToRedux,
  image,
}) => {
  const dispatch = useAppDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        isbn13,
        title,
        subtitle,
        count,
        priceToRedux,
        image,
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
          <img src={image} alt="Book photo" />
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
};

export default CartItem;
