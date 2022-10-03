import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux-hooks";
import { FavoriteIcon } from "../../components/PostCard/FavoriteIcon";

import { Button } from "../../components/Button/Button";
import { addFavoriteItem } from "../../store/slices/favouritesSlice";
import { addItem } from "../../store/slices/cartSlice";
import { AppRoute } from "../../enums/router";
import { AddToFavoriteIcon } from "../../components/PostCard/AddToFavorite";
import { RatingIcon } from "./RatingIcon";
import { bookTypePage } from "../../types/bookTypePage";

import {
  Wrapper,
  Title,
  WrapperPhoto,
  WrapperInfo,
  WrapperInfoRight,
  Price,
  Pating,
  PathOne,
  PathTwo,
  ButtonLike,
  Description,
  Desc,
} from "./Book.styled";

const Book: React.FC<bookTypePage | any> = ({ card }) => {
  const dispatch = useDispatch();
  const { items } = useAppSelector((state) => state.favorites);
  const [isAddedItem, setIsAddedItem] = React.useState<boolean>(false);

  const onClickFavorite = () => {
    dispatch(addFavoriteItem(card));
  };

  function rating() {
    if (card.rating == "") {
      return null;
    }
    if (card.rating == "1") {
      return <RatingIcon />;
    }
    if (card.rating == "2") {
      return (
        <>
          <RatingIcon /> <RatingIcon />
        </>
      );
    }
    if (card.rating == "3") {
      return (
        <>
          <RatingIcon /> <RatingIcon /> <RatingIcon />
        </>
      );
    }
    if (card.rating == "4") {
      return (
        <>
          <RatingIcon /> <RatingIcon /> <RatingIcon /> <RatingIcon />
        </>
      );
    }
    if (card.rating == "5") {
      return (
        <>
          <RatingIcon /> <RatingIcon /> <RatingIcon /> <RatingIcon />
          <RatingIcon />
        </>
      );
    }
  }

  return (
    <>
      <Title>{card.title}</Title>
      <Wrapper>
        <WrapperPhoto>
          <img src={card.image} alt="Image" />
          <ButtonLike onClick={onClickFavorite}>
            {items.find((id) => id.isbn13 == card.isbn13) ? (
              <AddToFavoriteIcon />
            ) : (
              <FavoriteIcon />
            )}
          </ButtonLike>
        </WrapperPhoto>
        <WrapperInfo>
          <WrapperInfoRight>
            <Price>{card.price}</Price>
            <Pating>{rating()}</Pating>
          </WrapperInfoRight>
          <WrapperInfoRight>
            <PathOne>Authors:</PathOne>
            <PathTwo>{card.authors}</PathTwo>
          </WrapperInfoRight>
          <WrapperInfoRight>
            <PathOne>Publisher:</PathOne>
            <PathTwo>{card.publisher}</PathTwo>
          </WrapperInfoRight>
          <WrapperInfoRight>
            <PathOne>Language:</PathOne>
            <PathTwo>English</PathTwo>
          </WrapperInfoRight>
          <WrapperInfoRight>
            <PathOne>Year:</PathOne>
            <PathTwo>{card.year}</PathTwo>
          </WrapperInfoRight>
          <WrapperInfoRight>
            <PathOne>Pages:</PathOne>
            <PathTwo>{card.pages}</PathTwo>
          </WrapperInfoRight>
          <WrapperInfoRight>
            <PathOne></PathOne>
            <PathTwo>
              <a href={card.url} target="_blank">
                More detailse
              </a>
            </PathTwo>
          </WrapperInfoRight>
          {isAddedItem ? (
            <Link to={AppRoute.Cart}>
              <Button
                title="view the shopping cart &#8594;"
                onClickBtn={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              />
            </Link>
          ) : (
            <Button
              title="add to cart"
              onClickBtn={() => {
                dispatch(addItem(card));
                setIsAddedItem(true);
              }}
            />
          )}
        </WrapperInfo>
      </Wrapper>
      <Description>Description</Description>
      <Desc>{card.desc}</Desc>
    </>
  );
};

export default Book;
