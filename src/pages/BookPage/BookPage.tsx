import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux-hooks";
import { FavoriteIcon } from "../../components/PostCard/FavoriteIcon";
import { FetchBookMain } from "../../api/fetchBook";
import { ButtonToMainPage } from "../../components/ButtonToMainPage/ButtonToMainPage";
import { SuccessfullIcon } from "./SuccessfullIcon";
import { Button } from "../../components/Button/Button";
import { addFavoriteItem } from "../../store/slices/favouritesSlice";
import { addItem } from "../../store/slices/cartSlice";
import { AppRoute } from "../../enums/router";
import { AddToFavoriteIcon } from "../../components/PostCard/AddToFavorite";
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

const BookPage: React.FC = () => {
  const dispatch = useDispatch();

  const { items } = useAppSelector((state) => state.favorites);

  const [email, setEmail] = React.useState<string>("");
  const [emailDirty, setEmailDirty] = React.useState<boolean>(false);
  const [emailError, setEmailError] = React.useState<string | null>(
    "The email cannot be empty"
  );
  const [formValid, setFormValid] = React.useState<boolean>(false);
  const [subscription, setSubscription] = React.useState<boolean>(false);
  const [isAddedItem, setIsAddedItem] = React.useState<boolean>(false);
  let card: any = FetchBookMain();

  React.useEffect(() => {
    if (emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError]);

  const onClickFavorite = () => {
    dispatch(addFavoriteItem(card));
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email");
    } else {
      setEmailError("");
    }
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
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
                onClick={() => {
                  setSubscription(true);
                  setEmail("");
                }}
              >
                Subscribe
              </BtbSubscibe>
            </WrapperInput>
          </Form>
        </WrapperFormSubscribe>
      )}
    </>
  );
};

export default BookPage;
