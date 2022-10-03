import * as React from "react";
import { useParams } from "react-router-dom";

import { fetchBookMain } from "../../api/fetchBook";
import { ButtonToMainPage } from "../../components/ButtonToMainPage/ButtonToMainPage";

import FormSubscription from "../../components/FormSubscription/FormSubscroption";
import { Title } from "./BookPage.styled";
import Book from "../../components/Book/Book";

const BookPage: React.FC = () => {
  let params = useParams();
  const [card, setCard] = React.useState<any>();

  React.useEffect(() => {
    fetchBookMain(params).then((data) => setCard(data));
  }, []);

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
      <Book card={card} />
      <FormSubscription />
    </>
  );
};

export default BookPage;
