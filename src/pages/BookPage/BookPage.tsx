import * as React from "react";

import { Link } from "react-router-dom";

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
  TitleForm,
  WrapperForm,
  TitleSubscribe,
  SubtitleSubscribe,
  Form,
  InputEmail,
  BtbSubscibe,
  WrapperFormSubscribe,
  BtbSubscibeSuccessfull,
  WrapperInput,
  Error,
} from "./BookPage.styled";

import { FavoriteIcon } from "../../components/Posts/PostCard/FavoriteIcon";
import { FetchBookMain } from "../../api/fetchBook";
import { ButtonToMainPage } from "../../components/ButtonToMainPage/ButtonToMainPage";
import { SuccessfullIcon } from "./SuccessfullIcon";
import { Button } from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";
import { AppRoute } from "../../enums/router";
import { AddToFavoriteIcon } from "../../components/Posts/PostCard/AddToFavorite";
import { addFavoriteItem } from "../../store/slices/favouritesSlice";

export function BookPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.favorites);

  const [email, setEmail] = React.useState("");
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [emailError, setEmailError] = React.useState(
    "The email cannot be empty"
  );
  const [formValid, setFormValid] = React.useState(false);
  const [subscription, setSubscription] = React.useState(false);
  const [isAddedItem, setIsAddedItem] = React.useState(false);

  React.useEffect(() => {
    if (emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError]);
  let card = FetchBookMain();

  const onClickFavorite = () => {
    dispatch(addFavoriteItem(card));
  };

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email");
    } else {
      setEmailError("");
    }
  };
  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
    }
  };

  if (!card) {
    return (
      <div>
        <Title>Loading...</Title>
      </div>
    );
  }

  return (
    <>
      <ButtonToMainPage />
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
            <Pating>{card.rating}</Pating>
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
            <Link to={AppRoute.Basket}>
              <Button title="view the shopping cart &#8594;" />
            </Link>
          ) : (
            <Button
              title="add to cart"
              onClickAdd={() => {
                dispatch(addItem(card));
                setIsAddedItem(true);
              }}
            />
          )}
        </WrapperInfo>
      </Wrapper>
      <Description>Description</Description>
      <Desc>{card.desc}</Desc>

      {subscription ? (
        <WrapperForm>
          <SuccessfullIcon />
          <TitleForm>You have successfully subscribed to the news.</TitleForm>
          <BtbSubscibeSuccessfull onClick={() => setSubscription(false)}>
            New email subscribe
          </BtbSubscibeSuccessfull>
        </WrapperForm>
      ) : (
        <WrapperFormSubscribe>
          <TitleSubscribe>Subscribe to Newsletter</TitleSubscribe>
          <SubtitleSubscribe>
            Be the first to know about new IT books, upcoming releases,
            exclusive offers and more.
          </SubtitleSubscribe>
          <Form>
            {emailDirty && emailError && <Error>* {emailError}</Error>}
            <WrapperInput>
              <InputEmail>
                <input
                  value={email}
                  onChange={(e) => emailHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  name="email"
                  type="email"
                  placeholder="Your email"
                />
              </InputEmail>
              <BtbSubscibe
                disabled={!formValid}
                onClick={() => setSubscription(true)}
              >
                Subscribe
              </BtbSubscibe>
            </WrapperInput>
          </Form>
        </WrapperFormSubscribe>
      )}
    </>
  );
}
