import * as React from "react";
import { bookType } from "../../../types/bookType";
import { BasketIcon } from "./BasketIcon";
import {
  PostWrapper,
  PostImage,
  PostName,
  PostAuthor,
  Price,
  WrapperInfo,
  WrapperMain,
  ButtonBasket,
  WrapperButton,
  StyledLink,
} from "./PostCard.styled";
import { FavoriteIcon } from "./FavoriteIcon";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../store/slices/cartSlice";
import { InCartIcon } from "./InCartIcon";
import { addFavoriteItem } from "../../../store/slices/favouritesSlice";
import { AddToFavoriteIcon } from "./AddToFavorite";

export function PostCard({
  isbn13,
  title,
  subtitle,
  price,
  image,
}: {
  isbn13: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
}) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.favorites);

  const [isAddedItem, setIsAddedItem] = React.useState(false);

  let priceToRedux = Number(price.slice(1));
  const onClickAdd = () => {
    const item = {
      isbn13,
      image,
      title,
      subtitle,
      priceToRedux,
    };
    dispatch(addItem(item));
    setIsAddedItem(true);
  };
  const onClickFavorite = () => {
    const item = {
      isbn13,
      image,
      title,
      subtitle,
      price,
    };
    dispatch(addFavoriteItem(item));
  };

  function PriceFree(pr: any) {
    if (pr == "$0.00") {
      return "Free";
    } else return pr;
  }

  return (
    <PostWrapper>
      <StyledLink key={isbn13} to={`/book/${isbn13}`}>
        <WrapperMain>
          <PostImage>
            <img
              src={
                image ||
                "https://yandex.by/images/search?text=%D0%BD%D0%B5%D1%82%20%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F&from=tabbar&pos=6&rpt=simage&img_url=http%3A%2F%2Frus-traktor.ru%2Fupload%2Fiblock%2Ff74%2Ff74f39dbc9b60954c926d72401adf1cc.jpg&lr=157"
              }
              alt=""
            />
          </PostImage>
          <PostName>{title} </PostName>
          <PostAuthor>{subtitle}</PostAuthor>
        </WrapperMain>
      </StyledLink>

      <WrapperInfo>
        <Price>{PriceFree(price)}</Price>
        <WrapperButton>
          <ButtonBasket onClick={onClickFavorite}>
            {items.find((id) => id.isbn13 == isbn13) ? (
              <AddToFavoriteIcon />
            ) : (
              <FavoriteIcon />
            )}
          </ButtonBasket>
          {isAddedItem ? (
            <InCartIcon />
          ) : (
            <ButtonBasket onClick={onClickAdd}>
              <BasketIcon />
            </ButtonBasket>
          )}
        </WrapperButton>
      </WrapperInfo>
    </PostWrapper>
  );
}
