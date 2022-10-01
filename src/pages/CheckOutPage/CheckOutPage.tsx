import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "../../components/Button/Button";
import { ButtonToMainPage } from "../../components/ButtonToMainPage/ButtonToMainPage";
import { Title } from "../../components/Title/Title";
import { useAppSelector } from "../../hooks/redux-hooks";
import { clearItems } from "../../store/slices/cartSlice";

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
  Error,
  Cheque,
  Alert,
} from "./CheckOutPage.styled";

const CheckOutPage: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useAppSelector((state) => state.cart);

  const [userName, setUserName] = React.useState<string>("");
  const [country, setCountry] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [notes, setNotes] = React.useState<string>("");
  const [formValid, setFormValid] = React.useState<boolean>(false);
  const [isConfirm, setIsConfirm] = React.useState<boolean>(false);

  let date = new Date();

  React.useEffect(() => {
    if (userName === "" || country === "" || address === "" || phone === "") {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userName, country, address, phone]);

  const submitForm = () => {
    if (formValid) {
      setUserName("");
      setCountry("");
      setAddress("");
      setPhone("");
      setEmail("");
      setNotes("");
      dispatch(clearItems());
      setIsConfirm(true);
    } else {
    }
  };

  if (isConfirm) {
    return (
      <>
        <ButtonToMainPage />
        <Title title="your order received" />
        <Cheque>
          <TitleForm>
            ORDER №
            {Math.floor(Math.random() * (Math.floor(1000) - Math.ceil(1))) +
              Math.ceil(1)}
          </TitleForm>
          <WrapperCol>
            <Item> Date:</Item>
            <Item> {date.toLocaleDateString()}</Item>
          </WrapperCol>
          <WrapperCol>
            <Item> Order time:</Item>
            <Item> {date.toLocaleTimeString()}</Item>
          </WrapperCol>
          <WrapperCol>
            <Item> Status: </Item>
            <Item>Receiving confirmation</Item>
          </WrapperCol>
          <Alert>
            In the near future our specialist will contact you to confirm the
            order.
          </Alert>
          <Book>Thank you, Your Bookstore!</Book>
        </Cheque>
      </>
    );
  }

  return (
    <>
      <Title title="Making an order" />
      <Wrapper>
        <WrapperForm>
          <TitleForm>Payment and delivery</TitleForm>
          <Label>
            Your name <Necessarily>&#42;</Necessarily>
          </Label>
          <input
            name="text"
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <Label>
            Country <Necessarily>&#42;</Necessarily>
          </Label>
          <input
            name="text"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <Label>
            Address <Necessarily>&#42;</Necessarily>
          </Label>
          <input
            name="text"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="House number and street name"
          />
          <Label>
            Phone number <Necessarily>&#42;</Necessarily>
          </Label>
          <input
            name="text"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Label>Email (optional)</Label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TitleForm>Details</TitleForm>
          <Label>Order Notes (optional)</Label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
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
          <Button title="Place the order" onClickBtn={submitForm} />
          {!formValid && <Error> * Fill in all required fields</Error>}
        </WrapperItem>
      </Wrapper>
    </>
  );
};

export default CheckOutPage;
